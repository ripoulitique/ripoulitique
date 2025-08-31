import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Calendar,
  Package,
  AlertCircle,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  PatchNote,
  patchNotesConfig,
} from "@/data/patchnotes/patchnote.config";

interface PatchNotesViewerProps {
  patchNotes?: PatchNote[];
  className?: string;
}
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const ComponentRenderingMap: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="text-2xl font-bold mb-4" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-xl font-bold mt-6 mb-3" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-lg font-semibold mt-4 mb-2" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="text-base font-medium mt-3 mb-2" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-semibold" {...props} />
  ),
  ul: ({ node, ...props }) => <ul className="space-y-1" {...props} />,
  li: ({ node, ...props }) => (
    <li className="ml-4 mb-1 flex items-start">
      <span className="mr-2">•</span>
      <span {...props} />
    </li>
  ),
  code: ({ node, inline, ...props }) =>
    inline ? (
      <code
        className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono"
        {...props}
      />
    ) : (
      <code
        className="block px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono whitespace-pre-wrap"
        {...props}
      />
    ),
  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
};

const PatchNotesViewer: React.FC<PatchNotesViewerProps> = ({
  patchNotes = patchNotesConfig,
  className = "",
}) => {
  const [selectedNote, setSelectedNote] = useState<PatchNote | null>(null);
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  console.log("patchNotes 0", patchNotes[0]);

  const groupedNotes = React.useMemo(() => {
    const groups: Record<string, Record<string, PatchNote[]>> = {};

    patchNotes
      .filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .forEach((note) => {
        const date = new Date(note.date);
        const year = date.getFullYear().toString();
        const month = date.toLocaleString("default", { month: "long" });

        if (!groups[year]) groups[year] = {};
        if (!groups[year][month]) groups[year][month] = [];
        groups[year][month].push(note);
      });

    return groups;
  }, [patchNotes, searchTerm]);

  // Auto-select first note and expand current year
  useEffect(() => {
    if (patchNotes.length > 0 && !selectedNote) {
      setSelectedNote(patchNotes[0]);
      const currentYear = new Date().getFullYear().toString();
      setExpandedYears(new Set([currentYear]));
    }
  }, [patchNotes, selectedNote]);

  const toggleYear = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  return (
    <div className={`flex h-screen bg-background ${className}`}>
      <div className="w-80 border-r border-border bg-muted/30">
        {/* Sidebar */}
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Package className="w-5 h-5" />
            Patch Notes
          </h2>
          <input
            type="text"
            placeholder="Search patches..."
            className="mt-3 w-full px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="p-4">
            {Object.keys(groupedNotes).length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No patch note found
              </p>
            ) : (
              Object.entries(groupedNotes)
                .sort(([a], [b]) => b.localeCompare(a))
                .map(([year, months]) => (
                  <div key={year} className="mb-4">
                    <button
                      onClick={() => toggleYear(year)}
                      className="flex items-center gap-1 w-full text-left font-medium text-sm hover:text-primary transition-colors"
                    >
                      {expandedYears.has(year) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      {year}
                    </button>

                    {expandedYears.has(year) && (
                      <div className="ml-4 mt-2">
                        {Object.entries(months)
                          .sort(([a], [b]) => {
                            const monthA = new Date(
                              Date.parse(a + " 1, 2000")
                            ).getMonth();
                            const monthB = new Date(
                              Date.parse(b + " 1, 2000")
                            ).getMonth();
                            return monthB - monthA;
                          })
                          .map(([month, notes]) => (
                            <div key={month} className="mb-3">
                              <p className="text-xs font-medium text-muted-foreground mb-1">
                                {month}
                              </p>
                              {notes.map((note) => (
                                <button
                                  key={note.id}
                                  onClick={() => setSelectedNote(note)}
                                  className={`w-full text-left p-2 rounded-md text-sm flex items-center gap-2 transition-colors ${
                                    selectedNote?.id === note.id
                                      ? "bg-primary text-primary-foreground"
                                      : "hover:bg-muted"
                                  }`}
                                >
                                  <FileText className="w-4 h-4 flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">
                                      {note.title}
                                    </p>
                                    <p className="text-xs opacity-70 truncate">
                                      {new Date(note.date).toLocaleDateString()}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {selectedNote ? (
          <div className="max-w-4xl mx-auto p-8">
            <div className="mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                {new Date(selectedNote.date).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {selectedNote.version && (
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                  <Package className="w-3 h-3" />v{selectedNote.version}
                </div>
              )}
            </div>

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={ComponentRenderingMap}
            >
              {selectedNote.content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <Alert className="max-w-md">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Select a patch note from the sidebar to view its contents.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatchNotesViewer;
