"use client";

import { useState } from "react";
import MyTab from "./MyTab";
import MypageModal from "./MypageModal";

export default function MypageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
    option: string;
    handleClick: () => void;
  } | null>(null);

  const openModal = (
    title: string,
    content: React.ReactNode,
    option: string,
    handleClick: () => void
  ) => {
    setModalContent({ title, content, option, handleClick });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <MyTab openModal={openModal} />
      {isModalOpen && modalContent && (
        <MypageModal
          title={modalContent.title}
          content={modalContent.content}
          option={modalContent.option}
          handleClick={() => {
            modalContent.handleClick();
            closeModal();
          }}
        />
      )}
    </div>
  );
}
