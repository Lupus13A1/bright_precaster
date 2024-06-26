'use client';

// Import necessary libraries and components
import React, { useState } from "react";
import Modal from "react-modal";
import Breadcrumb from "@/components/Common/Breadcrumb";

// Component definition
const Maxxi = () => {
    // State to manage modal open/close and selected image
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    // Function to open modal and set selected image
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage("");
    };

    return (
        <>
            {/* Breadcrumb component */}
            <Breadcrumb pageName="Maxxi Prime" description="Maxxi Prime" />

            {/* Gallery section */}
            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – แม็กซี่ ไพร์ม รัชดา-สุทธิสาร
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        {/* Replace image paths with your actual image paths */}
                        <div onClick={() => openModal("/images/pastwork/K-001.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-001.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-002.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-002.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-003.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-003.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-004.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-004.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-005.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-005.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-006.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-006.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-007.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-007.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-008.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-008.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/K-009.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/K-009.jpg" alt="Gallery image" />
                        </div>
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

// Export the component
export default Maxxi;
