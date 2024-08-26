'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image"; 
import Pastwork from "@/components/Common/pw";

// Component definition
const Curator = () => {
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
            <Pastwork pageName="Curator" description="Curator Ratchapruek-Surinthorn" />

            {/* Gallery section */}
            <section className="pb-[120px] ">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – Curator Ratchapruek-Surinthorn
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div onClick={() => openModal("/images/pastwork/F-001.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/F-001.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={300} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/F-003.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/F-003.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={300} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/F-004.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/F-004.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={300} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/F-005.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/F-005.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={300} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/F-006.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/F-006.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={300} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/F-009.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/F-009.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={300} 
                            />
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
                <Image
                    src={selectedImage}
                    alt="Selected"
                    layout="responsive"
                    width={800} 
                    height={600} 
                    style={{ maxWidth: "100%", maxHeight: "80vh" }}
                />
            </Modal>
        </>
    );
};

// Export the component
export default Curator;
