'use client';

// src/app/astoria/page.tsx

import React, { useState } from "react";
import Modal from "react-modal";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Astoria = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage("");
    };

    return (
        <>
            <Breadcrumb pageName="Astoria" description="Astoria-Ratchaphruek" />

            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – แอสโทเรีย ราชพฤกษ์-รัตนาธิเบศร์
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        {/* Replace image paths with your actual image paths */}
                        {[
                            "/images/pastwork/G-001.jpg",
                            "/images/pastwork/G-002.jpg",
                            "/images/pastwork/G-003.jpg",
                            "/images/pastwork/G-004.jpg",
                            "/images/pastwork/G-005.jpg",
                            "/images/pastwork/G-006.jpg",
                        ].map((src, index) => (
                            <div key={index} onClick={() => openModal(src)} className="cursor-pointer">
                                <img className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal component */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        background: "none",
                        border: "none",
                        padding: 0,
                        overflow: "hidden",
                    },
                }}
            >
                {/* Close button */}
                <button onClick={closeModal} style={{ float: "right", background: "none", border: "none", fontSize: "1.5em", cursor: "pointer", color: "white" }}>×</button>
                {/* Display selected image */}
                <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%", maxHeight: "80vh" }} />
            </Modal>
        </>
    );
};

export default Astoria;
