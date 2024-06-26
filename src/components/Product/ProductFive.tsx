'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import SectionTitle from "../Common/SectionTitle";

const ProductFive = () => {
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
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle title="Beam" paragraph="" mb="44px" />
                            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 p-4 max-w-[750px] md:max-w-[1800px] place-items-center">
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/beam1-1-768x589.png" style={{ borderRadius: '9px' }} onClick={() => openModal('/images/product/beam1-1-768x589.png')} />
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/beam2-1-768x587.png" style={{ borderRadius: '9px' }} onClick={() => openModal('/images/product/beam2-1-768x587.png')} />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <button onClick={closeModal} style={{ float: 'right', background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer' }}>×</button>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
            </Modal>
        </section>
    );
};


export default ProductFive;