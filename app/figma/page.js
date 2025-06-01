import React from 'react'
import Image from 'next/image'

export default function page() {
  return (

    <>

<div class="figma-guide">

  <h1>  Beginner's Guide to Figma</h1>

  <Image
    src="https://s3-alpha.figma.com/hub/file/1134854712/19d0a65b-5bc8-40b1-8738-d10c4380c62f-cover.png"
    width="650"
    height="400"
    alt="Figma Introduction Cover"
  />

  <p class="intro">
    New to Figma? No worries! This guide is made for absolute beginners to help you understand what Figma is, how to use it, and why it’s one of the best tools for UI/UX design today.
  </p>

  <section class="section">
    <h2>💡 What is Figma?</h2>
    <p>
      Figma is a cloud-based design tool used for creating user interfaces, prototypes, and graphic designs. It works directly in the browser, making it perfect for collaboration and real-time teamwork.
    </p>
  </section>

  <section class="section">
    <h2>🚀 Why Use Figma?</h2>
    <ul>
      <li>No installation — just log in on your browser.</li>
      <li>Real-time collaboration (like Google Docs for design).</li>
      <li>Auto-save and cloud storage.</li>
      <li>Cross-platform (Windows, macOS, Linux via browser).</li>
    </ul>
  </section>

  <section class="section">
    <h2>🧰 Key Tools in Figma</h2>
    <ul>
      <li><strong>Frame Tool (F)</strong> – Create layouts like screens or containers.</li>
      <li><strong>Shape Tools (R, O, etc.)</strong> – Draw rectangles, circles, and more.</li>
      <li><strong>Text Tool (T)</strong> – Add and style text.</li>
      <li><strong>Move Tool (V)</strong> – Select and move elements.</li>
      <li><strong>Scale Tool (K)</strong> – Resize proportionally.</li>
      <li><strong>Pen Tool (P)</strong> – Draw custom vector shapes.</li>
      <li><strong>Comment Tool (C)</strong> – Add feedback (for teams).</li>
    </ul>
  </section>

  <section class="section">
    <h2>🧪 What is Prototyping in Figma?</h2>
    <p>Prototyping allows you to simulate user interaction and flow — no coding required!</p>
    <ul>
      <li>Create interactions like click, hover, and drag.</li>
      <li>Link buttons to other frames/pages.</li>
      <li>Present and test user experience directly in Figma.</li>
    </ul>
  </section>

  <section class="section">
    <h2>👯 How to Collaborate in Figma</h2>
    <ul>
      <li>Invite team members by email.</li>
      <li>Use comments to give or get feedback.</li>
      <li>Work live on the same file with others.</li>
    </ul>
  </section>

  <section class="section">
    <h2>📌 Tips for Beginners</h2>
    <ul>
      <li>Start simple — like a basic app layout.</li>
      <li>Explore the Figma Community for templates and kits.</li>
      <li>Use alignment tools to keep things neat.</li>
      <li>Practice using auto layout and components.</li>
    </ul>
  </section>

  <section class="section">
    <h2>🎥 Learn by Watching – 1 Hour Figma Tutorial</h2>
    <div class="video-wrapper">
      <iframe
        width="650"
        height="366"
        src="https://www.youtube.com/embed/JGLfyTDgfDc"
        title="Figma Beginner Tutorial"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>

  <footer class="footer">
    <p>✨ Keep practicing, explore the Figma Community, and you'll become confident in no time. Happy designing!</p>
  </footer>

</div>


    </>
  )
}
