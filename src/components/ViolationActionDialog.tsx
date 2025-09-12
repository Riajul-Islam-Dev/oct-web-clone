"use client";

import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ViolationActionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  action: "approve" | "reject";
  travelerName: string;
  onSubmit: (comment: string) => void;
}

export function ViolationActionDialog({
  isOpen,
  onClose,
  action,
  travelerName,
  onSubmit,
}: ViolationActionDialogProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit(comment);
    setComment("");
    onClose();
  };

  const handleClose = () => {
    setComment("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md p-6" showCloseButton={false}>
        <div className="flex justify-between items-start mb-6">
          <DialogTitle className="text-lg font-medium text-[#282828] uppercase tracking-wide">
            {action === "reject" ? "REJECT REQUEST - POLICY VIOLATION" : "APPROVE REQUEST - POLICY VIOLATION"}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="p-1 h-6 w-6 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              {action === "reject" 
                ? "You are about to reject this booking request because it violates company policy. Please provide your remarks or advice below."
                : "This request violates company policy but you can approve it as an exception. Please provide a note"
              }
            </p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Short Description
          </label>
          <Textarea
            placeholder="Type short description"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        
        <div className="flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={handleClose}
            className="px-6 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={action === "reject" && !comment.trim()}
            className={`px-6 py-2 text-white font-medium rounded-full ${
              action === "approve"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {action === "approve" ? "Confirm" : "Confirm"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}