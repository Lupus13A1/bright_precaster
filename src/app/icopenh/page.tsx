'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image"; 
import Pastwork from "@/components/Common/pw";

// Component definition
const Icopenh = () => {
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
            <Pastwork pageName="Icopenh" description="Icopenh-สุขุมวิท76" />

            {/* Gallery section */}
            <section className="pb-[120px] ">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – Icopenh-สุขุมวิท76
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div onClick={() => openModal("/images/pastwork/D-000-1536x1152.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/D-000-1536x1152.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={375} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/D-010.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/D-010.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={375} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/D-005.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/D-005.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={375} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/D-006.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/D-006.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={375} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/D-008.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/D-008.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={375} 
                            />
                        </div>
                        <div onClick={() => openModal("/images/pastwork/D-009.jpg")}>
                            <Image
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src="/images/pastwork/D-009.jpg"
                                alt="Gallery image"
                                layout="responsive"
                                width={500}  
                                height={375} 
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
export default Icopenh;
