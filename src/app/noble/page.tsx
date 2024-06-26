'use client';

// Import necessary libraries and components
import React, { useState } from "react";
import Modal from "react-modal";
import Pastwork from "@/components/Common/pw";

// Component definition
const NobleCurve = () => {
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
            {/* Pastwork component */}
            <Pastwork pageName="Noble Curve" description="Noble Curve" />

            {/* Gallery section */}
            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – Noble Curve
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        {/* Replace image paths with your actual image paths */}
                        <div onClick={() => openModal("/images/pastwork/I-001.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/I-001.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/I-002.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/I-002.jpg" alt="Gallery image" />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/I-003.jpg")}>
                            <img className="h-auto max-w-full rounded-lg cursor-pointer" src="/images/pastwork/I-003.jpg" alt="Gallery image" />
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
export default NobleCurve;
