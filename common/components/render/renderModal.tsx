"use client";
import { useState } from "react";

import { Button } from "@/common/components/Button";
import { Modal } from "@/common/components/Modal";
import { Text } from "@/common/components/Text";

export const RenderModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onOpenChange = (open: boolean) => setIsOpen(open);

  return (
    <div className="flex flex-col items-center justify-center">
      <Modal open={isOpen} onOpenChange={onOpenChange}>
        <Modal.Trigger asChild>
          <Button onClick={onOpen}>{isOpen ? "Close" : "Open"}</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>This is the title</Modal.Header>
          <Modal.Body>
            <Text as="p">This is the body</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClose}>Save</Button>
            <Button variant="secondary" onClick={onClose}>
              Secondary
            </Button>
            <Button variant="tertiary" onClick={onClose}>
              Tertiary
            </Button>
            <Button variant="error" onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
};
