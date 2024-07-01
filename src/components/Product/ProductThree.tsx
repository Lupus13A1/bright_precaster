'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import SectionTitle from "../Common/SectionTitle";

const ProductThree = () => {
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
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle title="Slab" paragraph="" mb="44px" />
                            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[750px] md:max-w-[1800px] place-items-center">
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/22 (2).png" style={{ borderRadius: '9px' }} onClick={() => openModal('/images/product/Picture2.png')} />
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/22 (1).png" style={{ borderRadius: '9px' }} onClick={() => openModal('/images/product/slab1-2.png')} />
                            
                        </div>  
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        overflow: 'hidden',
                    },
                }}
            >
                <button onClick={closeModal} style={{ float: 'right', background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer', color: 'white' }}></button>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
            </Modal>
        </section>
    );
};

export default ProductThree;
