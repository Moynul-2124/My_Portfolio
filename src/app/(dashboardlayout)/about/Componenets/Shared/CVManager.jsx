

"use client";
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCV, clearCV } from '../../../../(mainlayout)/Redux/counter/cvSlice';

const CVManager = () => {
    const dispatch = useDispatch();
    const { fileUrl, fileName } = useSelector((state) => state.cv);
    const fileInputRef = useRef();

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            dispatch(uploadCV({ url, name: file.name }));
        }
    };

    const handleDownload = () => {
        if (fileUrl) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName || "cv.pdf";
            link.click();
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center  p-6 bg-gray-900 text-white rounded-lg">
            <h2 className="text-xl -translate-x-6  font-semibold">Upload & Download CV</h2>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                onChange={handleUpload}
                className="text-sm text-gray-300"
            />

            {fileUrl && (
                <div className="flex     gap-4 mt-4">
                    <button
                        onClick={handleDownload}
                        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
                    >
                        Download CV
                    </button>
                    <button
                        onClick={() => dispatch(clearCV())}
                        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                    >
                        Clear CV
                    </button>
                </div>
            )}
        </div>
    );
};

export default CVManager;
