"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Landing from "../components/landing/Landing";
import Description from "../components/description/Description";
import Projects from "../components/projects/Projects";
import SlidingImage from "../components/slidingImage/SlidingImage";
import Footer from "../components/footer/Footer";
import Preloader from "../components/preloader/Preloader";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImage />
      <Footer />
    </main>
  );
}
