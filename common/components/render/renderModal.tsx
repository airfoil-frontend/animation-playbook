"use client";
import { useMemo, useState } from "react";

import { Button } from "@/common/components/Button";
import { Modal, ModalProps } from "@/common/components/Modal";
import { Text } from "@/common/components/Text";

export const RenderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps>({});

  const onDefaultOpen = () => {
    setModalProps({});
    setIsOpen(true);
  };
  const onFullPageOpen = () => {
    setModalProps({ fullPage: true });
    setIsOpen(true);
  };
  const onNoOverlayOpen = () => {
    setModalProps({ hasOverlay: false });
    setIsOpen(true);
  };

  const onClose = () => setIsOpen(false);
  const onOpenChange = (open: boolean) => setIsOpen(open);

  const renderModal = useMemo(
    () => (
      <Modal open={isOpen} onOpenChange={onOpenChange} {...modalProps}>
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
    ),
    [isOpen, modalProps],
  );

  return (
    <div className="flex items-center justify-center gap-4">
      <Button onClick={onDefaultOpen}>Open</Button>
      <Button variant="secondary" onClick={onFullPageOpen}>
        Fullpage
      </Button>
      <Button variant="tertiary" onClick={onNoOverlayOpen}>
        No overlay
      </Button>
      {renderModal}
    </div>
  );
};
