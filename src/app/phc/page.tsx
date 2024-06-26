'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PHC = () => {
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
            <Breadcrumb pageName="PHC" description="PHC Hierarchy" />

            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – PHC Hierarchy
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        {/* Replace image paths with your actual image paths */}
                        <div onClick={() => openModal("/images/pastwork/Capture.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/Capture.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/Capture2.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/Capture2.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/Capture3.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/Capture3.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/N-001.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/N-001.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/N-002.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/N-002.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/N-003.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/N-003.jpg" alt="Gallery image" />
                        </div>
                        {/* Add more images here */}
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

export default PHC;
