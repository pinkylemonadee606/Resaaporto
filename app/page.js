'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "#111" : "#fff",
      color: dark ? "#fff" : "#111",
      minHeight: "100vh",
      padding: "40px",
      transition: "0.3s"
    }}>
      <div style={{ textAlign: "right" }}>
        <button onClick={() => setDark(!dark)} style={{ padding: "8px 16px", cursor: "pointer" }}>
          {dark ? <Sun size={16}/> : <Moon size={16}/>}
        </button>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "40px", marginTop: "40px" }}
      >
        Reza Aditia
      </motion.h1>

      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        Internal Communication & Operational Alignment Professional
      </p>

      <ul style={{ marginTop: "40px", lineHeight: "1.8" }}>
        <li>5+ Years Cross-Functional Coordination</li>
        <li>12+ International Suppliers Managed</li>
        <li>40% Workflow Efficiency Improvement</li>
        <li>Executive Reporting & Stakeholder Communication</li>
      </ul>

      <footer style={{ marginTop: "80px", opacity: 0.5 }}>
        © {new Date().getFullYear()} Reza Aditia
      </footer>
    </div>
  );
}'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "#111" : "#fff",
      color: dark ? "#fff" : "#111",
      minHeight: "100vh",
      padding: "40px",
      transition: "0.3s"
    }}>
      <div style={{ textAlign: "right" }}>
        <button onClick={() => setDark(!dark)} style={{ padding: "8px 16px", cursor: "pointer" }}>
          {dark ? <Sun size={16}/> : <Moon size={16}/>}
        </button>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "40px", marginTop: "40px" }}
      >
        Reza Aditia
      </motion.h1>

      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        Internal Communication & Operational Alignment Professional
      </p>

      <ul style={{ marginTop: "40px", lineHeight: "1.8" }}>
        <li>5+ Years Cross-Functional Coordination</li>
        <li>12+ International Suppliers Managed</li>
        <li>40% Workflow Efficiency Improvement</li>
        <li>Executive Reporting & Stakeholder Communication</li>
      </ul>

      <footer style={{ marginTop: "80px", opacity: 0.5 }}>
        © {new Date().getFullYear()} Reza Aditia
      </footer>
    </div>
  );
}
