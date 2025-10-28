"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, DragEvent, ChangeEvent, JSX } from "react";
import html2canvas from "html2canvas";
import { DownloadIcon, Ticket, Loader2 } from "lucide-react";

import Logo from "@/assets/group-logo.svg";
import PhotoBoard from "@/components/PhotoBoard";
import { getCroppedImg } from "@/utils/cropImage";
import Cropper, { Area } from "react-easy-crop";

export default function Home(): JSX.Element {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const [generatedName, setGeneratedName] = useState("");
  const [generatedTag, setGeneratedTag] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const photoBoardRef = useRef<HTMLDivElement>(null);

  const handleClick = (): void => inputRef.current?.click();

  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImage(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage(ev.target?.result as string);
      setCropModalOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async (): Promise<void> => {
    if (!name || !tag || !image) return;
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1500)); // simulate generation delay
    setGeneratedName(name);
    setGeneratedTag(tag);
    setGeneratedImage(image);
    setIsGenerating(false);
  };

  const handleDownload = async (): Promise<void> => {
    if (!photoBoardRef.current) return;
    setIsDownloading(true);
    const element = photoBoardRef.current;
    await document.fonts.ready;
    const images = Array.from(element.querySelectorAll("img"));
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      })
    );

    const originalTransform = element.style.transform;
    const originalTransition = element.style.transition;
    element.style.transition = "none";
    element.style.transform = "none";
    element.getBoundingClientRect();
    await new Promise((r) => setTimeout(r, 100));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#FFFDEB",
      logging: false,
      scrollX: 0,
      scrollY: 0,
      removeContainer: true,
    });

    element.style.transform = originalTransform;
    element.style.transition = originalTransition;

    const link = document.createElement("a");
    link.download = "devfest-ticket.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="font-poppins bg-[#FFFDEB] min-h-screen relative">
      {/* DOWNLOAD LOADER */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black/60 z-50 flex flex-col items-center justify-center">
          <Loader2 className="animate-spin text-white" size={48} />
          <p className="text-white mt-3 text-lg font-semibold">
            Downloading...
          </p>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="py-4 sm:py-6 border-b border-[#E5E5E5]">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="devfest-maiduguri"
              priority
              className="h-8 w-auto sm:h-10"
            />
          </Link>
          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
            <Link
              href="https://gdg.community.dev/e/mzbnsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-5 py-2 bg-[#F9AB00] text-white rounded-full font-semibold text-sm sm:text-base whitespace-nowrap"
            >
              <Ticket size={14} className="sm:size-4" />
              <span className="hidden sm:inline">Get your free tickets</span>
              <span className="sm:hidden">Tickets</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header className="text-center mt-12 sm:mt-16 px-6">
        <div className="mx-auto w-full sm:w-5/6 md:w-3/4 lg:w-3/5">
          <p className="text-base sm:text-lg font-medium text-gray-800 mb-2">
            Show your excitement for DevFest Maiduguri
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight mb-6">
            Create a custom DevFest display photo to share online
          </h1>
          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
            <a
              href="#dp-container"
              className="px-8 py-3 bg-[#F9AB00] text-white rounded-full font-semibold text-base sm:text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* MAIN SECTION */}
      <section
        id="dp-container"
        className="flex flex-col md:flex-row items-center justify-center gap-10 my-16 px-6 md:px-12"
      >
        {/* INPUTS */}
        <div className="w-full md:w-2/5">
          <h2 className="pb-3 mb-6 text-2xl font-bold border-b border-black">
            Enter your details
          </h2>

          <label className="block text-black mb-2 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-xl p-3 w-full mb-4 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#428EFF] focus:border-[#428EFF] transition"
          />

          <label className="block text-black mb-2 font-medium">Tag Hook</label>
          <input
            type="text"
            placeholder="e.g. #DevFest2025"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="border border-gray-400 rounded-xl p-3 w-full mb-4 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E74436] focus:border-[#E74436] transition"
          />

          <label className="block mb-3 font-semibold">Upload Image</label>
          <div
            className={`flex flex-col justify-center h-60 p-10 text-center border-2 border-dashed rounded-2xl transition-all ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-400 hover:border-blue-500"
            }`}
            onClick={handleClick}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-2 text-gray-700"
            >
              <path d="M12 13v8" />
              <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
              <path d="m8 17 4-4 4 4" />
            </svg>
            <p className="text-sm text-gray-700">
              Click or drag your photo here
              <br />
              PNG, JPG, or SVG (max 800×400)
            </p>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mx-auto mt-4 rounded-lg object-cover max-h-28"
              />
            )}
          </div>

          <button
            onClick={handleGenerate}
            disabled={!name || !tag || !image || isGenerating}
            className={`mt-6 w-full h-12 text-lg font-medium text-white rounded-2xl transition ${
              !name || !tag || !image
                ? "bg-blue-400/50 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isGenerating ? (
              <span className="flex justify-center items-center gap-2">
                <Loader2 className="animate-spin" size={20} />
                Generating...
              </span>
            ) : (
              "Generate"
            )}
          </button>
        </div>

        {/* OUTPUT */}
        <div className="w-full flex flex-col items-center">
          <div className="relative p-2 w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] aspect-[573/622] overflow-hidden border border-[#202020] rounded-xl md:rounded-3xl shadow-lg bg-[#FFFDEB]">
            <PhotoBoard
              ref={photoBoardRef}
              tag={generatedTag}
              name={generatedName}
              image={generatedImage}
            />
          </div>

          {generatedName && generatedTag && generatedImage && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-base font-semibold"
              >
                <DownloadIcon size={18} />
                Download Your DP
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-black py-6 border-t border-[#E5E5E5]">
        <div className="container mx-auto flex items-center justify-between px-6 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="devfest-maiduguri" className="w-auto h-6" />
          </div>
          <p className="text-sm text-center sm:text-right w-full sm:w-auto">
            © {new Date().getFullYear()} DevFest Maiduguri. All rights reserved.
          </p>
        </div>
      </footer>

      {cropModalOpen && image && (
        <div className="fixed inset-0 bg-black/60 z-50 flex flex-col items-center justify-center">
          <div className="relative bg-white rounded-2xl w-[90%] max-w-md p-4 flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(_, croppedPixels: Area) =>
                  setCroppedAreaPixels(croppedPixels)
                }
              />
            </div>

            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 text-black"
                onClick={() => setCropModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                onClick={async () => {
                  const cropped = await getCroppedImg(image, croppedAreaPixels);
                  setImage(cropped);
                  setCropModalOpen(false);
                }}
              >
                Save Crop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
