'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image"; 
import Pastwork from "@/components/Common/pw";

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
            <Pastwork pageName="Astoria" description="Astoria-Ratchaphruek" />

            <section className="pb-[120px]">
                <div className="container">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        ผลงาน – แอสโทเรีย ราชพฤกษ์-รัตนาธิเบศร์
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                       
                        {[
                            "/images/pastwork/G-001.jpg",
                            "/images/pastwork/G-002.jpg",
                            "/images/pastwork/G-003.jpg",
                            "/images/pastwork/G-004.jpg",
                            "/images/pastwork/G-005.jpg",
                            "/images/pastwork/G-006.jpg",
                        ].map((src, index) => (
                            <div key={index} onClick={() => openModal(src)} className="cursor-pointer">
                                <Image
                                    className="h-auto max-w-full rounded-lg"
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    layout="responsive"
                                    width={500}  
                                    height={300} 
                                />
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

export default Astoria;
