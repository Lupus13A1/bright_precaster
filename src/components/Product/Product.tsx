'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import SectionTitle from "../Common/SectionTitle";

const Product = () => {
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

    const renderImages = (imageArray) => (
        imageArray.map((src, index) => (
            <div key={index}>
                <img
                    className="hover:opacity-75 cursor-pointer"
                    src={src}
                    loading="lazy" // Add lazy loading
                    style={{ borderRadius: '9px' }}
                    onClick={() => openModal(src)}
                />
            </div>
        ))
    );

    const sections = [
        { title: "Wall", images: ["/images/product/all/wall_1.png", "/images/product/all/wall_2.png", "/images/product/all/wall_3.png", "/images/product/all/wall_4.png"] },
        { title: "Wall special", images: ["/images/product/all/Wall_pecial_1.png", "/images/product/all/Wall_pecial_2.png", "/images/product/all/Wall_pecial_3.png", "/images/product/all/Wall_pecial_4.png"] },
        { title: "Slab", images: ["/images/product/all/Slab_1.png", "/images/product/all/Slab_2.png", "/images/product/all/Slab_3.png", "/images/product/all/Slab_4.png"] },
        { title: "Stair", images: ["/images/product/all/Stair_1.png", "/images/product/all/Stair_2.png", "/images/product/all/Stair_3.png", "/images/product/all/Stair_4.png"] },
        { title: "Beam", images: ["/images/product/all/Beam_1.png", "/images/product/all/Beam_2.png", "/images/product/all/Beam_3.png", "/images/product/all/Beam_4.png"] },
        { title: "Footing", images: ["/images/product/all/Footing_1.png", "/images/product/all/Footing_2.png", "/images/product/all/Footing_3.png", "/images/product/all/Footing_4.png"] }
    ];

    return (
        <section id="about" className="pt-14 md:pt-10 lg:pt-10">
            {sections.map((section, index) => (
                <div className="container px-5 py-30 mx-auto" key={index}>
                    <div className="border-b border-body-color/[.35] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"><br></br>
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-4 lg:w-1/2">
                                <SectionTitle title={section.title} paragraph="" mb="44px" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                {renderImages(section.images)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
                    content: {
                        top: '50%', left: '50%', right: 'auto', bottom: 'auto',
                        marginRight: '-50%', transform: 'translate(-50%, -50%)',
                        background: 'none', border: 'none', padding: 0,
                    },
                }}
            >
                <button
                    onClick={closeModal}
                    style={{
                        float: 'right', background: 'none', border: 'none',
                        fontSize: '1.5em', cursor: 'pointer', color: 'white',
                    }}
                >
                    &times;
                </button>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
            </Modal>
        </section>
    );
};

export default Product;
