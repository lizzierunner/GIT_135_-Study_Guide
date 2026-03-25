// Study Data for GIT 135 Quiz 01
// Adobe Essentials and Point Line Plane

// ========== ADOBE ESSENTIALS DATA ==========
const adobeFlashcards = [
  {
    id: "1",
    topic: "Adobe Essentials",
    question: "What are the three main Adobe applications and what are they used for?",
    answer: "Illustrator = vector graphics (logos, icons). InDesign = layouts (magazines, posters). Photoshop = images (raster/photos). Memory hack: Illustrator = DRAW, InDesign = LAYOUT, Photoshop = PHOTOS.",
    color: "#3b82f6"
  },
  {
    id: "2",
    topic: "Adobe Essentials",
    question: "What's the difference between Vector and Raster?",
    answer: "Vector = scalable graphics using paths and anchor points (Illustrator). Raster = pixel-based images (Photoshop). Vectors can scale infinitely without losing quality, while raster images become pixelated when enlarged.",
    color: "#3b82f6"
  },
  {
    id: "3",
    topic: "Adobe Essentials",
    question: "What are the 4 main parts of the Adobe interface?",
    answer: "Toolbar (left side), Panels (right side), Menu (top), Workspace (center). These are consistent across all Adobe applications.",
    color: "#3b82f6"
  },
  {
    id: "4",
    topic: "Adobe Essentials",
    question: "What are the core skills needed in Adobe applications?",
    answer: "Layers (organizing elements), Selection tools (moving/editing objects), Color (fill vs stroke), and Exporting (saving in different formats).",
    color: "#3b82f6"
  },
  {
    id: "5",
    topic: "Adobe Essentials",
    question: "What color modes should you use for digital vs print?",
    answer: "RGB (Red, Green, Blue) for digital/screens. CMYK (Cyan, Magenta, Yellow, Black) for print. RGB uses light, CMYK uses ink.",
    color: "#a855f7"
  },
  {
    id: "6",
    topic: "Illustrator",
    question: "What is Illustrator used for and what are vectors made of?",
    answer: "Used for logos, icons, and digital art using vectors. Vectors are made of paths and anchor points (mathematical points), making them scalable without quality loss.",
    color: "#f97316"
  },
  {
    id: "7",
    topic: "Illustrator",
    question: "What are the 5 important Illustrator tools and their shortcuts?",
    answer: "Selection tool (V), Shape tools, Pen tool (P), Type tool (T), Eyedropper (I). These are the essential tools for creating vector graphics.",
    color: "#f97316"
  },
  {
    id: "8",
    topic: "Illustrator",
    question: "What is the Pathfinder tool used for?",
    answer: "Pathfinder is used to combine shapes together. You can unite, subtract, intersect, or exclude shapes to create complex designs from simple shapes.",
    color: "#f97316"
  },
  {
    id: "9",
    topic: "Illustrator",
    question: "What's the difference between Fill and Stroke?",
    answer: "Fill is the color inside a shape or path. Stroke is the outline or border around a shape. Both can have different colors and can be turned on/off independently.",
    color: "#f97316"
  },
  {
    id: "10",
    topic: "Illustrator",
    question: "What export formats should you use for Illustrator files?",
    answer: "PNG for web (raster with transparency), PDF for print (high quality), AI for editable files (Illustrator's native format for future editing).",
    color: "#f97316"
  },
  {
    id: "11",
    topic: "Illustrator",
    question: "Why are Layers important in Illustrator?",
    answer: "Layers help organize your designs by separating different elements. You can show/hide, lock, and rearrange layers to keep complex projects organized and easy to edit.",
    color: "#f97316"
  },
  {
    id: "12",
    topic: "InDesign",
    question: "What is InDesign used for?",
    answer: "InDesign is used for layouts like posters, magazines, brochures, and multi-page documents. It's the best tool for combining text and images in professional page layouts.",
    color: "#ec4899"
  },
  {
    id: "13",
    topic: "InDesign",
    question: "What are the 3 important InDesign tools?",
    answer: "Selection tool (V), Type tool (T), and Frame tools. These tools help you select, create text, and create frames for images and text.",
    color: "#ec4899"
  },
  {
    id: "14",
    topic: "InDesign",
    question: "What are frames in InDesign and why are they important?",
    answer: "Everything in InDesign goes inside frames - both text and images. Frames are containers that hold your content and can be resized, moved, and styled.",
    color: "#ec4899"
  },
  {
    id: "15",
    topic: "InDesign",
    question: "What are the key typography terms in InDesign?",
    answer: "Font (typeface style), Size (how big the text is), Leading (space between lines), and Tracking (space between letters). These control how your text looks.",
    color: "#ec4899"
  },
  {
    id: "16",
    topic: "InDesign",
    question: "What is the Pages panel used for?",
    answer: "The Pages panel manages multiple pages in your document. You can add, delete, rearrange, and navigate between pages for multi-page projects like magazines or booklets.",
    color: "#ec4899"
  },
  {
    id: "17",
    topic: "InDesign",
    question: "How do you align elements in InDesign?",
    answer: "Use guides and grids for alignment. Guides are draggable lines you pull from rulers, and grids provide a consistent structure. These help create clean, professional layouts.",
    color: "#ec4899"
  },
  {
    id: "18",
    topic: "InDesign",
    question: "What format should you export InDesign files as?",
    answer: "Export as PDF. This preserves your layout and can be used for both print and digital distribution while maintaining quality and fonts.",
    color: "#ec4899"
  },
  {
    id: "21",
    topic: "InDesign Setup",
    question: "What are the standard document setup settings for InDesign?",
    answer: "8.5 x 11 inches (Portrait), Margins: 0.5 inches, Columns: 2, Gutter: 0.25 inches. Memory trick: 12 pt, 2 columns, 0.5 margin, 0.25 gutter, PDF print.",
    color: "#ec4899"
  },
  {
    id: "22",
    topic: "InDesign Setup",
    question: "What does overset text mean in InDesign?",
    answer: "Overset text shows a red + symbol, which means there's more text than can fit in the frame. You need to resize the frame or link to another frame to show all the text.",
    color: "#ec4899"
  },
  {
    id: "23",
    topic: "InDesign Setup",
    question: "How do you access the Character Panel and what's the shortcut?",
    answer: "Character Panel controls font, size, and spacing. Shortcut: Command + T (Mac) or Ctrl + T (Windows). Your assignment uses 12 pt font size.",
    color: "#ec4899"
  },
  {
    id: "24",
    topic: "InDesign Setup",
    question: "What are the proper export settings for InDesign?",
    answer: "File → Export → Adobe PDF (Print). Preset: High Quality Print. Scale: 100%. No printer marks. This creates a professional print-ready PDF.",
    color: "#ec4899"
  },
  {
    id: "25",
    topic: "InDesign Setup",
    question: "How do you use guides in InDesign?",
    answer: "Guides help align layout elements. Access them through View → Grids & Guides. You can drag guides from rulers or create them from the menu for precise alignment.",
    color: "#ec4899"
  },
  {
    id: "26",
    topic: "InDesign Setup",
    question: "What's the difference between margins and gutters?",
    answer: "Margins: 0.5 inches - space around the edge of the page. Gutter: 0.25 inches - space between columns. Gutters only appear when you have multiple columns.",
    color: "#ec4899"
  },
  {
    id: "27",
    topic: "InDesign Setup",
    question: "What alignment should you use for body text in InDesign?",
    answer: "Use left alignment for body text and keep spacing consistent throughout your document. This creates a clean, professional, easy-to-read layout.",
    color: "#ec4899"
  },
  {
    id: "19",
    topic: "Quick Comparison",
    question: "Quick comparison: Illustrator vs InDesign",
    answer: "Illustrator = DRAWING (creating graphics, logos, icons). InDesign = LAYOUT (arranging content, multi-page documents). Use Illustrator to create elements, InDesign to arrange them.",
    color: "#22c55e"
  },
  {
    id: "20",
    topic: "Quick Comparison",
    question: "When would you use each Adobe application?",
    answer: "Illustrator: Create a logo. InDesign: Create a magazine or poster with text and images. Photoshop: Edit photos and create raster images. Each tool has a specific purpose!",
    color: "#22c55e"
  }
];

const adobeQuizQuestions = [
  {
    id: "q1",
    question: "Which Adobe application would you use to create a logo?",
    options: ["Photoshop", "InDesign", "Illustrator", "Acrobat"],
    correctAnswer: 2,
    explanation: "Illustrator is used for vector graphics like logos and icons. Logos need to be scalable, which makes vector graphics perfect.",
    topic: "Adobe Essentials"
  },
  {
    id: "q2",
    question: "What is the main advantage of vector graphics over raster images?",
    options: [
      "Better colors",
      "Scalable without losing quality",
      "Smaller file size",
      "Easier to create"
    ],
    correctAnswer: 1,
    explanation: "Vector graphics are scalable - they can be resized infinitely without losing quality because they use paths and anchor points, not pixels.",
    topic: "Adobe Essentials"
  },
  {
    id: "q3",
    question: "Where is the Toolbar located in Adobe applications?",
    options: ["Top", "Bottom", "Left side", "Right side"],
    correctAnswer: 2,
    explanation: "The Toolbar is on the left side, Panels on the right, Menu at the top, and Workspace in the center.",
    topic: "Interface"
  },
  {
    id: "q4",
    question: "Which color mode should you use for printing?",
    options: ["RGB", "CMYK", "HSB", "Grayscale"],
    correctAnswer: 1,
    explanation: "CMYK (Cyan, Magenta, Yellow, Black) is used for printing because it represents ink colors. RGB is for digital/screens.",
    topic: "Color Modes"
  },
  {
    id: "q5",
    question: "What is the difference between Fill and Stroke?",
    options: [
      "Fill is inside, Stroke is the outline",
      "Fill is for text, Stroke is for shapes",
      "Fill is RGB, Stroke is CMYK",
      "They are the same thing"
    ],
    correctAnswer: 0,
    explanation: "Fill is the color inside a shape or path, while Stroke is the outline or border around it.",
    topic: "Core Skills"
  },
  {
    id: "q6",
    question: "What keyboard shortcut activates the Selection tool in Illustrator?",
    options: ["S", "V", "A", "M"],
    correctAnswer: 1,
    explanation: "V is the keyboard shortcut for the Selection tool, used to select and move objects.",
    topic: "Illustrator Tools"
  },
  {
    id: "q7",
    question: "What tool is used to combine shapes in Illustrator?",
    options: ["Shape Builder", "Pathfinder", "Pen tool", "Unite tool"],
    correctAnswer: 1,
    explanation: "Pathfinder is used to combine shapes - you can unite, subtract, intersect, or exclude shapes.",
    topic: "Illustrator Tools"
  },
  {
    id: "q8",
    question: "What keyboard shortcut activates the Pen tool?",
    options: ["V", "T", "P", "E"],
    correctAnswer: 2,
    explanation: "P is the keyboard shortcut for the Pen tool, used to create custom paths and shapes.",
    topic: "Illustrator Tools"
  },
  {
    id: "q9",
    question: "What file format should you use to export an Illustrator file for the web?",
    options: ["AI", "PDF", "PNG", "PSD"],
    correctAnswer: 2,
    explanation: "PNG is best for web use - it's a raster format that supports transparency and works on all browsers.",
    topic: "Illustrator Export"
  },
  {
    id: "q10",
    question: "What are vectors made of in Illustrator?",
    options: [
      "Pixels",
      "Paths and anchor points",
      "Layers",
      "Colors"
    ],
    correctAnswer: 1,
    explanation: "Vectors are made of paths and anchor points (mathematical coordinates), which allows them to scale infinitely.",
    topic: "Illustrator Concepts"
  },
  {
    id: "q11",
    question: "What is the Eyedropper tool (I) used for?",
    options: [
      "Drawing shapes",
      "Selecting colors from existing objects",
      "Creating gradients",
      "Measuring distances"
    ],
    correctAnswer: 1,
    explanation: "The Eyedropper tool (I) picks up colors and attributes from existing objects so you can apply them to other objects.",
    topic: "Illustrator Tools"
  },
  {
    id: "q11b",
    question: "When setting up a new Illustrator file for a poster, which unit of measurement should you use?",
    options: ["Pica", "Pixels", "Points", "Inches"],
    correctAnswer: 3,
    explanation: "Inches should be used for posters and other print materials. Pixels are for web/digital, points and picas are for typography.",
    topic: "Illustrator Concepts"
  },
  {
    id: "q11c",
    question: "Which Adobe program is best for creating multi-page documents like magazines or brochures?",
    options: ["Acrobat", "InDesign", "Illustrator", "Photoshop"],
    correctAnswer: 1,
    explanation: "InDesign is specifically designed for multi-page layouts like magazines, brochures, books, and catalogs. It excels at combining text and images across multiple pages.",
    topic: "Adobe Essentials"
  },
  {
    id: "q11d",
    question: "Why are layers important in Illustrator and InDesign?",
    options: [
      "They resize text",
      "They organize artwork and allow for easy editing",
      "They change the color of shapes",
      "They export images to PDF"
    ],
    correctAnswer: 1,
    explanation: "Layers organize artwork by separating different elements, making it easy to show/hide, lock, and edit specific parts of your design without affecting others.",
    topic: "Core Skills"
  },
  {
    id: "q11e",
    question: "What is the function of the Pen tool?",
    options: [
      "Draw multi-sided shapes like triangles, hexagons, or octagons",
      "Create custom paths and curves",
      "Combine or subtract shapes",
      "Organize and control object stacking"
    ],
    correctAnswer: 1,
    explanation: "The Pen tool (P) is used to create custom paths and curves by placing anchor points and adjusting their handles.",
    topic: "Illustrator Tools"
  },
  {
    id: "q11f",
    question: "What is the function of the Polygon tool?",
    options: [
      "Create custom paths and curves",
      "Organize and control object stacking",
      "Draw multi-sided shapes like triangles, hexagons, or octagons",
      "Combine or subtract shapes"
    ],
    correctAnswer: 2,
    explanation: "The Polygon tool is used to draw multi-sided shapes like triangles, hexagons, or octagons quickly and easily.",
    topic: "Illustrator Tools"
  },
  {
    id: "q11g",
    question: "What is the function of the Shape Builder tool?",
    options: [
      "Draw multi-sided shapes",
      "Create custom paths and curves",
      "Organize and control object stacking",
      "Combine or subtract shapes"
    ],
    correctAnswer: 3,
    explanation: "The Shape Builder tool allows you to combine or subtract shapes by clicking and dragging across them, making it easy to create complex shapes.",
    topic: "Illustrator Tools"
  },
  {
    id: "q11h",
    question: "What is the function of the Layers panel?",
    options: [
      "Combine or subtract shapes",
      "Create custom paths and curves",
      "Organize and control object stacking",
      "Draw multi-sided shapes"
    ],
    correctAnswer: 2,
    explanation: "The Layers panel is used to organize and control object stacking, allowing you to show/hide, lock, and arrange different elements in your design.",
    topic: "Illustrator Tools"
  },
  {
    id: "q12",
    question: "What is InDesign primarily used for?",
    options: [
      "Photo editing",
      "Creating logos",
      "Page layouts and multi-page documents",
      "Video editing"
    ],
    correctAnswer: 2,
    explanation: "InDesign is for layouts - magazines, posters, brochures, and any multi-page documents.",
    topic: "InDesign Basics"
  },
  {
    id: "q13",
    question: "In InDesign, what must text and images be placed inside?",
    options: ["Layers", "Frames", "Panels", "Pages"],
    correctAnswer: 1,
    explanation: "Everything in InDesign goes inside frames - both text and images need frames to contain them.",
    topic: "InDesign Concepts"
  },
  {
    id: "q14",
    question: "What typography term describes the space between lines of text?",
    options: ["Tracking", "Kerning", "Leading", "Spacing"],
    correctAnswer: 2,
    explanation: "Leading is the space between lines of text. Tracking is space between letters.",
    topic: "InDesign Typography"
  },
  {
    id: "q15",
    question: "What file format should you export InDesign documents as?",
    options: ["INDD", "PNG", "PDF", "JPEG"],
    correctAnswer: 2,
    explanation: "Export InDesign files as PDF for both print and digital use. PDF preserves your layout and quality.",
    topic: "InDesign Export"
  },
  {
    id: "q16",
    question: "What helps you align elements in InDesign?",
    options: ["Frames", "Guides and grids", "Panels", "Layers"],
    correctAnswer: 1,
    explanation: "Guides and grids help you align elements precisely for clean, professional layouts.",
    topic: "InDesign Tools"
  },
  {
    id: "q17",
    question: "What panel in InDesign manages multiple pages?",
    options: ["Layers panel", "Pages panel", "Tools panel", "Properties panel"],
    correctAnswer: 1,
    explanation: "The Pages panel manages multiple pages - you can add, delete, rearrange, and navigate pages.",
    topic: "InDesign Interface"
  },
  {
    id: "q18",
    question: "Using the memory hack: What does Illustrator = ?",
    options: ["PHOTOS", "LAYOUT", "DRAW", "EDIT"],
    correctAnswer: 2,
    explanation: "Illustrator = DRAW (creating graphics), InDesign = LAYOUT (arranging content), Photoshop = PHOTOS (editing images).",
    topic: "Quick Comparison"
  },
  {
    id: "q19",
    question: "Which application would you use to create a magazine layout?",
    options: ["Illustrator", "Photoshop", "InDesign", "Premiere"],
    correctAnswer: 2,
    explanation: "InDesign is for layouts - it's perfect for magazines, brochures, and multi-page documents.",
    topic: "Quick Comparison"
  },
  {
    id: "q20",
    question: "What type of images does Photoshop work with?",
    options: ["Vector", "Raster", "Both", "Neither"],
    correctAnswer: 1,
    explanation: "Photoshop works with raster images (pixels) - photos and pixel-based graphics.",
    topic: "Adobe Essentials"
  },
  {
    id: "q21",
    question: "What are the standard document dimensions for InDesign assignments?",
    options: ["11 x 17 inches", "8.5 x 11 inches", "8 x 10 inches", "A4 size"],
    correctAnswer: 1,
    explanation: "8.5 x 11 inches (Portrait) is the standard document size for assignments.",
    topic: "InDesign Setup"
  },
  {
    id: "q22",
    question: "What is the standard margin size for InDesign documents?",
    options: ["0.25 inches", "0.5 inches", "1 inch", "0.75 inches"],
    correctAnswer: 1,
    explanation: "Margins should be 0.5 inches on all sides of the document.",
    topic: "InDesign Setup"
  },
  {
    id: "q23",
    question: "How many columns should you use in the standard InDesign setup?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Use 2 columns for the standard document layout.",
    topic: "InDesign Setup"
  },
  {
    id: "q24",
    question: "What is the gutter size between columns?",
    options: ["0.25 inches", "0.5 inches", "0.125 inches", "0.75 inches"],
    correctAnswer: 0,
    explanation: "The gutter (space between columns) should be 0.25 inches.",
    topic: "InDesign Setup"
  },
  {
    id: "q25",
    question: "What does the red + symbol mean in a text frame?",
    options: [
      "Text is bold",
      "Text is selected",
      "Overset text (more text than fits)",
      "Text needs spell check"
    ],
    correctAnswer: 2,
    explanation: "A red + indicates overset text - there's more text than can fit in the frame.",
    topic: "InDesign Setup"
  },
  {
    id: "q26",
    question: "What is the keyboard shortcut to open the Character Panel?",
    options: ["Command/Ctrl + T", "Command/Ctrl + P", "Command/Ctrl + C", "Command/Ctrl + K"],
    correctAnswer: 0,
    explanation: "Command + T (Mac) or Ctrl + T (Windows) opens the Character Panel.",
    topic: "InDesign Setup"
  },
  {
    id: "q27",
    question: "What font size should you use for the assignment?",
    options: ["10 pt", "11 pt", "12 pt", "14 pt"],
    correctAnswer: 2,
    explanation: "The assignment uses 12 pt font size.",
    topic: "InDesign Setup"
  },
  {
    id: "q28",
    question: "How do you access guides in InDesign?",
    options: [
      "Edit → Guides",
      "View → Grids & Guides",
      "Window → Guides",
      "File → Guides"
    ],
    correctAnswer: 1,
    explanation: "Go to View → Grids & Guides to access and manage guides in InDesign.",
    topic: "InDesign Setup"
  },
  {
    id: "q29",
    question: "What preset should you use when exporting to PDF for print?",
    options: [
      "Smallest File Size",
      "High Quality Print",
      "Press Quality",
      "Standard"
    ],
    correctAnswer: 1,
    explanation: "Use the 'High Quality Print' preset when exporting Adobe PDF (Print).",
    topic: "InDesign Setup"
  },
  {
    id: "q30",
    question: "What scale should you use when exporting InDesign documents?",
    options: ["50%", "75%", "100%", "125%"],
    correctAnswer: 2,
    explanation: "Always export at 100% scale to maintain the correct document size.",
    topic: "InDesign Setup"
  },
  {
    id: "q31",
    question: "Should you include printer marks when exporting for assignment?",
    options: [
      "Yes, always",
      "No",
      "Only for print",
      "Only for digital"
    ],
    correctAnswer: 1,
    explanation: "No printer marks should be included in the export for assignments.",
    topic: "InDesign Setup"
  },
  {
    id: "q32",
    question: "What's the memory trick for InDesign setup?",
    options: [
      "8.5 x 11, 2 columns, 0.5 margin",
      "12 pt, 2 columns, 0.5 margin, 0.25 gutter, PDF print",
      "2 columns, PDF, 12 pt",
      "Portrait, 2 columns, guides"
    ],
    correctAnswer: 1,
    explanation: "Memory trick: 12 pt, 2 columns, 0.5 margin, 0.25 gutter, PDF print - covers all the key settings!",
    topic: "InDesign Setup"
  },
  {
    id: "q33",
    question: "What do columns help you do in InDesign?",
    options: [
      "Apply gradients",
      "Create paths",
      "Divide the page into sections for text and layout",
      "Align objects horizontally"
    ],
    correctAnswer: 2,
    explanation: "Columns divide the page into vertical sections, making it easier to organize text and layout elements. The standard setup uses 2 columns with a 0.25 inch gutter between them.",
    topic: "InDesign Setup"
  },
  {
    id: "q34",
    question: "Which panel is used to adjust font related settings like font size, style, leading, and tracking?",
    options: [
      "Layers panel",
      "Character panel",
      "Paragraph panel",
      "Glyphs panel"
    ],
    correctAnswer: 1,
    explanation: "The Character panel (Command/Ctrl + T) controls font-related settings including font, size, style, leading (line spacing), and tracking (letter spacing).",
    topic: "InDesign Typography"
  },
  {
    id: "q35",
    question: "What is the purpose of guides in InDesign?",
    options: [
      "To export layouts",
      "To align and position elements precisely",
      "To measure the page",
      "To crop images"
    ],
    correctAnswer: 1,
    explanation: "Guides help you align and position elements precisely, creating clean and professional layouts. You can access them through View → Grids & Guides or drag them from the rulers.",
    topic: "InDesign Tools"
  },
  {
    id: "q36",
    question: "The Ellipse Tool is used to:",
    options: [
      "Draw circles and ovals",
      "Convert text into outlines",
      "Round the corners of rectangles",
      "Draw curved paths"
    ],
    correctAnswer: 0,
    explanation: "The Ellipse Tool is a shape tool used to draw circles and ovals (ellipses) in Illustrator. Hold Shift while dragging to create perfect circles.",
    topic: "Illustrator Tools"
  },
  {
    id: "q37",
    question: "Which of the following is a benefit of the Shape Builder Tool?",
    options: [
      "Automatically exports shapes to PNG",
      "Select which parts of shapes to combine or remove",
      "Change the color mode of a document",
      "Create gradients across shapes"
    ],
    correctAnswer: 1,
    explanation: "The Shape Builder Tool lets you select which parts of shapes to combine or remove by clicking and dragging. It's an intuitive way to create complex shapes from simple ones.",
    topic: "Illustrator Tools"
  },
  {
    id: "q38",
    question: "Margins in InDesign help define safe areas for text and layout.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True! Margins (0.5 inches in your setup) create safe areas around the edges of the page, keeping text and layout elements away from the edge for a professional, clean appearance.",
    topic: "InDesign Setup"
  }
];

// ========== MODULE 1: POINT LINE PLANE DATA (Pages 32-47) ==========
const plpFlashcards = [
  {
    id: "plp1",
    topic: "Core Concepts",
    question: "What is the core idea of Point, Line, Plane?",
    answer: "All design is built from: Point → Line → Plane. Points create lines, lines create planes, and planes create all visual design. Lupton calls these the 'grammar of visual design' — like learning ABCs before writing essays! 🔤",
    color: "#6366f1"
  },
  {
    id: "plp2",
    topic: "Point",
    question: "What is a Point in design?",
    answer: "A point marks a position in space. It has NO actual size — it's purely a LOCATION. But we see it as a dot. A single point = focal point. Many points = lines, textures, shading. In typography, a period is a point. Think: 📍 on a map!",
    color: "#a855f7"
  },
  {
    id: "plp2b",
    topic: "Point",
    question: "How do points create a sense of movement or direction? (p.32-33)",
    answer: "When you scatter points across a page, your eye connects them — like connect-the-dots! 🧠 Your brain AUTOMATICALLY links nearby points into lines and shapes. Closer points = stronger connection. This is called 'implied line.' Designers use this to guide where your eye goes!",
    color: "#a855f7"
  },
  {
    id: "plp2c",
    topic: "Point",
    question: "What is a 'point' in typography according to Lupton? (p.33)",
    answer: "Every letter/character is a POINT when seen as part of a larger field of text. A period (.) is the most literal point. But zoom out and each letter becomes a point in the overall texture of a paragraph. It's all about SCALE — a city on a map is a point too! 🏙️➡️📍",
    color: "#a855f7"
  },
  {
    id: "plp3",
    topic: "Line",
    question: "What is a Line in design?",
    answer: "A line is the path of a moving point — a series of connected points. It has LENGTH but no width (theoretically). Lines show direction, emotion, and structure. Thick lines = bold/strong. Thin lines = delicate. Wavy lines = calm. Jagged lines = chaos! 〰️⚡",
    color: "#3b82f6"
  },
  {
    id: "plp3b",
    topic: "Line",
    question: "What are the different things lines can DO in design? (p.36-37)",
    answer: "Lines can: 1) DIVIDE space 2) EXPRESS emotion 3) DESCRIBE edges & structure 4) DEFINE shapes (when closed) 5) Create TEXTURE (when repeated) 6) Show MOVEMENT & direction 7) Build PLANES (when multiplied). Lines are the Swiss Army knife of design! 🔪✨",
    color: "#3b82f6"
  },
  {
    id: "plp3c",
    topic: "Line",
    question: "How are lines used in mapping and information design? (p.38)",
    answer: "Lines connect DATA POINTS — think subway maps 🗺️, family trees, or flowcharts. They show RELATIONSHIPS between things. In maps, lines become borders, roads, and rivers. Different line styles (dashed, dotted, thick, thin) encode different TYPES of information.",
    color: "#3b82f6"
  },
  {
    id: "plp3d",
    topic: "Line",
    question: "What is the 'line' of text in graphic design? (p.39)",
    answer: "A line of text is literally a LINE — it moves your eye horizontally across the page. The baseline (invisible line text sits on) is a structural line. Lines of text stacked = a plane/block. Designers control the 'color' of text blocks through weight, spacing, and size! 📝",
    color: "#3b82f6"
  },
  {
    id: "plp4",
    topic: "Plane",
    question: "What is a Plane in design?",
    answer: "A plane is a flat surface with HEIGHT and WIDTH (2D). It forms when a line closes to create a shape or gains breadth. Every shape you see — rectangle, circle, blob — is a plane. Planes are the BUILDING BLOCKS of layouts! 🧱",
    color: "#06b6d4"
  },
  {
    id: "plp4b",
    topic: "Plane",
    question: "What are examples of planes in real graphic design? (p.40-42)",
    answer: "Planes are EVERYWHERE: a block of text, a photograph, a colored box, a page itself, a wall, a floor, a window. Even a field of text is a plane! If it's flat and has area, it's a plane. NOT a plane: light (energy), a person (3D volume). 📄📸🟦",
    color: "#06b6d4"
  },
  {
    id: "plp4c",
    topic: "Plane",
    question: "How do planes create depth and layers in design? (p.42-43)",
    answer: "Overlapping planes create the illusion of DEPTH — like shuffling cards 🃏. The plane 'on top' appears closer. Transparency lets you see through planes, creating complex layered effects. Designers stack, overlap, and arrange planes to build visual HIERARCHY.",
    color: "#06b6d4"
  },
  {
    id: "plp5",
    topic: "Space & Volume",
    question: "What is the difference between Linear Perspective and Axonometric?",
    answer: "Linear perspective = REALISTIC depth (things shrink as they go back, vanishing point). Like looking down train tracks 🛤️. Axonometric = FLAT 3D (no size change, parallel lines stay parallel). Used in tech drawings, video games 🎮, and diagrams.",
    color: "#14b8a6"
  },
  {
    id: "plp5b",
    topic: "Space & Volume",
    question: "How do designers create the illusion of 3D on a 2D surface? (p.44-45)",
    answer: "Tricks to fake 3D: 1) OVERLAP (front covers back) 2) SIZE (bigger = closer) 3) SHADING (light/shadow) 4) PERSPECTIVE (converging lines) 5) TRANSPARENCY 6) COLOR (warm = close, cool = far). Your brain is easily fooled! 🧠✨",
    color: "#14b8a6"
  },
  {
    id: "plp6",
    topic: "Space & Volume",
    question: "What is Volume in design?",
    answer: "Volume = 3D object with height, width, AND DEPTH. On a 2D surface, volume is an ILLUSION created by shading, perspective, and rendering. A circle is a plane; add shading and it becomes a sphere (volume)! ⚪➡️🔮",
    color: "#14b8a6"
  },
  {
    id: "plp7",
    topic: "Texture & Patterns",
    question: "How are textures and patterns created from points and lines? (p.46-47)",
    answer: "Repeat points → texture/tone. Repeat lines → patterns/hatching. The DENSITY of elements controls darkness. Tight dots = dark, sparse dots = light. This is literally how newspaper photos work (halftone)! The eye blends individual elements into continuous tone. 🖨️",
    color: "#22c55e"
  },
  {
    id: "plp8",
    topic: "Printing",
    question: "What is the halftone process and why does it matter?",
    answer: "Halftone = printing trick using DOTS of varying size/spacing to fake continuous shading. Big/close dots = DARK ⬛. Small/far dots = LIGHT ⬜. Your eyes blend them together. This is how ALL printed photos work — zoom in on a newspaper photo and you'll see the dots!",
    color: "#f59e0b"
  },
  {
    id: "plp9",
    topic: "Bézier Curves",
    question: "What are Bézier curves and why should you care?",
    answer: "Bézier curves = the math behind EVERY curve in vector graphics! Defined by: ANCHOR points (where curve starts/ends) + CONTROL points (handles that shape the curve). Used in Illustrator's Pen tool. Named after Pierre Bézier (car designer at Renault 🚗). Master these = master the Pen tool!",
    color: "#f97316"
  },
  {
    id: "plp10",
    topic: "Quick Cram",
    question: "⚡ SPEED ROUND: Point, Line, Plane, Perspective, Axonometric, Bézier",
    answer: "Point = dot/location 📍 | Line = movement/connection 〰️ | Plane = surface/shape 🟦 | Perspective = realistic depth 🛤️ | Axonometric = flat 3D 🎮 | Bézier = controlled curve 🖊️ — THESE BUILD ALL OF DESIGN!",
    color: "#ef4444"
  },
  {
    id: "plp11",
    topic: "Core Concepts",
    question: "What does Lupton mean by 'the grammar of visual design'? (p.32)",
    answer: "Just like sentences need nouns, verbs, and grammar — DESIGN needs points, lines, and planes as its fundamental grammar. Every poster, logo, website, and magazine breaks down to these 3 elements. Learn the grammar → speak design fluently! 🗣️🎨",
    color: "#6366f1"
  }
];

// ========== MODULE 2: RHYTHM, BALANCE, SCALE, TEXTURE, COLOR, FIGURE/GROUND (Pages 48-67) ==========
const mod2Flashcards = [
  {
    id: "m2_1",
    topic: "Rhythm & Balance",
    question: "What is RHYTHM in graphic design? (p.48-49)",
    answer: "Rhythm = repeating visual elements to create PATTERN and MOVEMENT. Like a beat in music! 🥁 Repeating shapes, colors, or lines across a design creates visual rhythm. It guides the eye and creates unity. Think: columns of text, rows of icons, repeated motifs.",
    color: "#8b5cf6"
  },
  {
    id: "m2_2",
    topic: "Rhythm & Balance",
    question: "What is BALANCE in design and what are the two main types? (p.50-51)",
    answer: "Balance = visual weight is distributed so design feels STABLE. Two types: 1) SYMMETRICAL — mirror image, formal, calm ⚖️ 2) ASYMMETRICAL — unequal but balanced, dynamic, energetic 🌊. Asymmetry is MORE interesting but HARDER to pull off!",
    color: "#8b5cf6"
  },
  {
    id: "m2_3",
    topic: "Rhythm & Balance",
    question: "What's the difference between symmetrical and asymmetrical balance? (p.50-51)",
    answer: "SYMMETRICAL: fold it in half, both sides match. Think: butterfly 🦋, wedding invite. Feels formal & stable. ASYMMETRICAL: sides are DIFFERENT but still feel balanced. A big dark shape on one side balances several small light shapes on the other. Feels dynamic & modern! ⚡",
    color: "#8b5cf6"
  },
  {
    id: "m2_4",
    topic: "Rhythm & Balance",
    question: "How does visual weight work in asymmetrical balance? (p.51)",
    answer: "Visual weight = how much an element 'pulls' your eye. Things that are HEAVIER: bigger size, darker color, complex texture, isolation (alone on page), bright/warm color. Balance heavy vs light elements like a seesaw! 🎪 Big dark circle on left = several small shapes on right.",
    color: "#8b5cf6"
  },
  {
    id: "m2_5",
    topic: "Scale",
    question: "What is SCALE in design? (p.52-53)",
    answer: "Scale = the SIZE of an element relative to other elements or to the page itself. It's not just 'big' or 'small' — it's about RELATIONSHIPS. A tiny dot on a huge page feels different than the same dot crammed with other elements. Scale creates drama, hierarchy, and emphasis! 🔍🔭",
    color: "#ec4899"
  },
  {
    id: "m2_6",
    topic: "Scale",
    question: "How do designers use scale to create HIERARCHY? (p.54-55)",
    answer: "Bigger = MORE important (usually). Headlines are BIG, body text is small. A giant photo grabs attention first, then you read the caption. Scale differences tell viewers: 'LOOK HERE FIRST! 👀 Then here. Then here.' Without scale contrast, everything competes and nothing wins.",
    color: "#ec4899"
  },
  {
    id: "m2_7",
    topic: "Scale",
    question: "What is the difference between scale and proportion? (p.53)",
    answer: "SCALE = size relative to something else (a giant letter on a small page). PROPORTION = internal size relationships within an object (the ratio of width to height). A rectangle can be at any scale but keep the same proportions. Think: resizing a photo — proportion stays, scale changes! 📐",
    color: "#ec4899"
  },
  {
    id: "m2_8",
    topic: "Scale",
    question: "What happens when you play with UNEXPECTED scale? (p.55-57)",
    answer: "Unexpected scale = SURPRISE and IMPACT! 💥 Making something tiny huge (or vice versa) creates visual tension and interest. A giant paperclip next to a tiny skyscraper? Surreal and attention-grabbing. Designers use scale shifts to challenge expectations and create memorable designs.",
    color: "#ec4899"
  },
  {
    id: "m2_9",
    topic: "Texture",
    question: "What is TEXTURE in graphic design? (p.60-61)",
    answer: "Texture = the surface quality of a design element. Can be ACTUAL (physical texture you can touch, like embossing 🤚) or VISUAL (texture that only LOOKS textured, created with patterns, photos, or marks 👁️). Texture adds richness and depth to otherwise flat designs!",
    color: "#22c55e"
  },
  {
    id: "m2_10",
    topic: "Texture",
    question: "What's the difference between actual texture and visual texture? (p.60-61)",
    answer: "ACTUAL texture: you can FEEL it — embossed paper, rough canvas, bumpy screen print 🤚. VISUAL texture: LOOKS textured but is flat — a photo of wood grain, a pattern of tiny dots, hatched lines 👁️. In digital design, almost all texture is visual (screens are smooth!).",
    color: "#22c55e"
  },
  {
    id: "m2_11",
    topic: "Texture",
    question: "How do points and lines create texture in design? (p.61-62)",
    answer: "Remember Point → Line → Plane? Repeat tiny points = stippled texture. Repeat thin lines = hatched texture. The DENSITY, SIZE, and SPACING of elements control how dark/light and rough/smooth it appears. This connects directly back to Module 1! Full circle! 🔄",
    color: "#22c55e"
  },
  {
    id: "m2_12",
    topic: "Color",
    question: "What are the basic properties of COLOR? (p.62-63)",
    answer: "Three properties: 1) HUE = the color name (red, blue, green 🌈) 2) SATURATION = intensity/purity (vivid vs muted/gray 🎨) 3) VALUE = lightness/darkness (tint = add white, shade = add black 🌗). Master these 3 and you master color!",
    color: "#f59e0b"
  },
  {
    id: "m2_13",
    topic: "Color",
    question: "What's the difference between RGB and CMYK color? (p.63-64)",
    answer: "RGB = light (screens 💻). Red+Green+Blue. ADDITIVE — more color = brighter (all = white). CMYK = ink (print 🖨️). Cyan+Magenta+Yellow+blacK. SUBTRACTIVE — more ink = darker (all = muddy black). ALWAYS check: is this for screen or print?",
    color: "#f59e0b"
  },
  {
    id: "m2_14",
    topic: "Color",
    question: "What are warm vs cool colors and why do they matter? (p.64-65)",
    answer: "WARM colors (red, orange, yellow 🔥) = energy, passion, attention, come FORWARD. COOL colors (blue, green, purple 🧊) = calm, trust, depth, recede BACKWARD. Warm/cool contrast creates depth! A warm object on a cool background POPS forward. Sneaky design trick! 👀",
    color: "#f59e0b"
  },
  {
    id: "m2_15",
    topic: "Color",
    question: "What is color contrast and why is it important? (p.65-66)",
    answer: "Color contrast = difference between colors placed together. HIGH contrast (black on white) = easy to read, bold ⬛⬜. LOW contrast (light gray on white) = subtle, hard to read. Contrast is essential for READABILITY and ACCESSIBILITY. If people can't read it, it doesn't matter how pretty it is! 📖",
    color: "#f59e0b"
  },
  {
    id: "m2_16",
    topic: "Figure/Ground",
    question: "What is FIGURE/GROUND in design? (p.66-67)",
    answer: "Figure = the object/element you focus on (the SUBJECT 🎯). Ground = the background/space behind it. Your brain ALWAYS tries to separate figure from ground. Good designers play with this relationship — sometimes making it ambiguous on PURPOSE for visual interest! 🧠",
    color: "#06b6d4"
  },
  {
    id: "m2_17",
    topic: "Figure/Ground",
    question: "What are the three figure/ground relationships? (p.66-67)",
    answer: "1) STABLE: clearly figure vs ground, no confusion (text on white page 📄) 2) REVERSIBLE: figure and ground can swap — think of the vase/faces illusion! 🏺👤 3) AMBIGUOUS: can't tell which is figure and which is ground — visually complex and dynamic! 🤯",
    color: "#06b6d4"
  },
  {
    id: "m2_18",
    topic: "Figure/Ground",
    question: "Why is NEGATIVE SPACE important? (p.67)",
    answer: "Negative space = the 'empty' ground around and between figures. It's NOT empty — it's an active design element! 🎨 Think: the arrow hidden in the FedEx logo, or the bear in the Toblerone mountain. Great designers use negative space as a SECRET second design. Mind = blown! 🤯",
    color: "#06b6d4"
  },
  {
    id: "m2_19",
    topic: "Quick Cram",
    question: "⚡ MODULE 2 SPEED ROUND: All key terms!",
    answer: "Rhythm = visual beat 🥁 | Balance = visual weight ⚖️ | Symmetry = mirror 🦋 | Asymmetry = dynamic balance ⚡ | Scale = relative size 🔭 | Texture = surface quality 🤚 | Hue/Sat/Value = color properties 🌈 | Figure/Ground = subject vs background 🎯 | Negative space = active emptiness 🤯",
    color: "#ef4444"
  },
  {
    id: "m2_20",
    topic: "Rhythm & Balance",
    question: "What is RADIAL balance? (p.51)",
    answer: "Radial balance = elements radiate outward from a CENTER point, like a sunburst ☀️ or a flower 🌸. It naturally draws your eye to the middle. Think: mandalas, clock faces, pizza slices. It's a third type of balance beyond symmetrical and asymmetrical!",
    color: "#8b5cf6"
  },
  // ===== LECTURE: The Design Desk — Rhythm, Balance, Scale Examples =====
  {
    id: "m2_21",
    topic: "Rhythm (Lecture)",
    question: "How does Jules Chéret's poster for Les Girard demonstrate rhythm?",
    answer: "The dancers' legs and coattails create IMPLIED RHYTHM through line work — a visual syncopation like off-beat/on-beat 🎵. The legs & coattails alternate so you almost 'hear' a boop-boop-boop rhythm. Art Nouveau was the KING of rhythm through flowing line work!",
    color: "#8b5cf6"
  },
  {
    id: "m2_22",
    topic: "Rhythm (Lecture)",
    question: "How does Will H. Bradley's 'The Chap-Book' show rhythm AND balance?",
    answer: "RHYTHM: Large flowy lines & flowery color planes create a serene, wave-like rhythm (like long violin bow strokes 🎻). BALANCE: The billowy robe/dress is SO large it feels like negative space, while the small typography & blue background field COUNTERBALANCE it. Clever use of scale too!",
    color: "#8b5cf6"
  },
  {
    id: "m2_23",
    topic: "Balance (Lecture)",
    question: "Why is Fritz Ehler's 'Jugend' magazine cover (1896) a masterful example of visual balance?",
    answer: "Only TWO things on the page: a figure and a word mark with a flower illustration. ALL the negative space counterbalances the graphic. You could draw a perfect DIAGONAL — the visual weight of the content equals the 'weight' of the empty space on the other side! ⚖️",
    color: "#8b5cf6"
  },
  {
    id: "m2_24",
    topic: "Balance (Lecture)",
    question: "What was Sachplakat and what does the Priester matches ad show about balance?",
    answer: "Sachplakat (1905) = a movement that valued SIMPLICITY after the overly decorative Art Nouveau era. The Priester matches ad is just a logo + match illustration on a big dark field. The black space ISN'T just empty — it acts like a CONTAINER that makes the illustration FLOAT in space! 🕳️",
    color: "#8b5cf6"
  },
  {
    id: "m2_25",
    topic: "Balance (Lecture)",
    question: "What is the key principle about WHITE SPACE placement from the lecture?",
    answer: "White space on the OUTSIDE = anti-gravity! 🚀 It propels content UP and INTO the center. It makes things feel suspended and floating. White space on the INSIDE = blown apart, disparate, disconnected. Push white space to the EDGES to hold content together in the center!",
    color: "#8b5cf6"
  },
  {
    id: "m2_26",
    topic: "Balance & Scale (Lecture)",
    question: "How does Josef Müller-Brockmann's Beethoven poster (1955) demonstrate rhythm, balance, AND scale?",
    answer: "RHYTHM: Spinning, flowing black bars match Beethoven's musical crescendos 🎵. BALANCE: White space 'locks' perfectly into the fingers of black space. SCALE: Big rotating bars are dominant → then typography is tiny at center → guides eye from big to small for a focused reading experience! International Style masterclass. 🇨🇭",
    color: "#ec4899"
  },
  {
    id: "m2_27",
    topic: "Balance & Scale (Lecture)",
    question: "How does the 'Silence = Death' poster (1987) use scale and balance?",
    answer: "Only TWO pieces: a pink triangle + 'Silence = Death' text with small attribution. The vast BLACK field counterbalances the simple form and single line of text. The EMPTINESS is what makes it SO powerful — minimal elements + maximum negative space = maximum emotional impact! 🔺 Social resistance design at its finest.",
    color: "#ec4899"
  },
  {
    id: "m2_28",
    topic: "Scale (Lecture)",
    question: "How does Paula Scher's Public Theater poster (1995) show scale in a MAXIMALIST approach?",
    answer: "Tons of text + one big jumping figure, but scale creates clear HIERARCHY: 1️⃣ 'The Public Theater' (biggest = read first) → 2️⃣ 'Bring in da Noise, Bring in da Funk' → 3️⃣ Details work down in size → 4️⃣ Location/membership info (smallest). Scale GUIDES THE EYE even when there's a LOT going on! Maximalist ≠ chaotic.",
    color: "#ec4899"
  },
  {
    id: "m2_29",
    topic: "Scale (Lecture)",
    question: "According to the lecture, which is usually HARDER to balance — minimalist or maximalist design?",
    answer: "MINIMALIST is harder! 🤯 With only 2-3 elements, every placement matters enormously. Maximalist designs with many elements are often EASIER to balance because you have more 'weight' to distribute. The Jugend cover (2 elements) is harder to nail than the Public Theater poster (tons of elements)!",
    color: "#ec4899"
  },
  {
    id: "m2_30",
    topic: "Rhythm (Lecture)",
    question: "How does rhythm work across MULTI-PAGE documents? (Photo book example)",
    answer: "Rhythm = syncopation across spreads! 📖 Pattern: large 2-page photo → breaks into smaller images pushing toward page edge → turn page → rewarded with NEGATIVE SPACE/breathing room → builds up again → visual break. This growth & rest cycle keeps readers ENGAGED because no two spreads are identical, but consistent margins/grids/typography create continuity!",
    color: "#8b5cf6"
  },
  {
    id: "m2_31",
    topic: "Rhythm (Lecture)",
    question: "How does the Monster Children magazine demonstrate multi-page rhythm?",
    answer: "Similar layouts create EXPECTED rhythm in photo sections → then editorial sections BREAK the pattern with expressive typography (Ray Gun-inspired 🤘). Crazy/unhinged spreads are COUNTERBALANCED by clean, grounded ones. A grid UNDERNEATH allows expressive moments that can be grounded by stable layouts. Full-page spreads = reader REST moments, info-rich spreads = reader SPEED UP moments!",
    color: "#8b5cf6"
  },
  {
    id: "m2_32",
    topic: "Rhythm (Lecture)",
    question: "What makes multi-page rhythm work WITHOUT losing the reader?",
    answer: "SELF-SUSTAINED RULES: same margins, same typography, same image grid across pages 📐. This creates UNIFORMITY/CONTINUITY so readers aren't lost. But WITHIN those rules, varying how elements fill the grid creates SURPRISE & DELIGHT. Consistent structure + varied content = engaged reader who doesn't put the book down!",
    color: "#8b5cf6"
  },
  {
    id: "m2_33",
    topic: "Rhythm (Lecture)",
    question: "What is a 'dos-à-dos' (do-si-do) book design?",
    answer: "A book that reads from BOTH ends toward the MIDDLE! 📚↔️📚 The lecture's France photo book was dos-à-dos: French from the front to the middle, English from the back to the middle. A unique reading experience enabled by intentional design structure!",
    color: "#8b5cf6"
  },
  {
    id: "m2_34",
    topic: "Rhythm (Lecture)",
    question: "How does visual rhythm appear in DIGITAL interfaces? (iPhone News app example)",
    answer: "Cards sorted in syncopated rhythm: big wide cards with edge-to-edge images → section banners break rhythm → switch to title-left/image-right cards → another section → pattern changes again. Rhythm also shifts from VERTICAL (up/down scrolling) to HORIZONTAL (left/right swiping). Visual rhythm isn't just for print — it's in every app you use! 📱",
    color: "#8b5cf6"
  },
  {
    id: "m2_35",
    topic: "Design History (Lecture)",
    question: "Match these design eras/movements to their approximate time periods!",
    answer: "Art Nouveau = 1890s (flowery, decorative, organic lines 🌿). Sachplakat = 1905 (simple, direct product advertising 📦). Russian Suprematism = 1920 (bold geometric, centered compositions 🔴). International Style = 1950s (grid-based, clean Swiss design 🇨🇭). Postmodern/Social Resistance = 1987+ (powerful minimal messaging ✊). Postmodern Maximalist = 1990s (expressive, layered typography 🎨).",
    color: "#f59e0b"
  }
];

const plpQuizQuestions = [
  {
    id: "plpq1",
    question: "What is the fundamental building block of all design?",
    options: ["Line", "Point", "Plane", "Shape"],
    correctAnswer: 1,
    explanation: "Point is the fundamental building block. All design is built from Point → Line → Plane. Lupton calls these the 'grammar of visual design.'",
    topic: "Core Concepts"
  },
  {
    id: "plpq2",
    question: "What is the correct order of design elements building upon each other?",
    options: [
      "Plane → Line → Point",
      "Line → Point → Plane",
      "Point → Line → Plane",
      "Point → Plane → Line"
    ],
    correctAnswer: 2,
    explanation: "The correct order is Point → Line → Plane. Points create lines, lines create planes. This is the foundation of ALL visual design.",
    topic: "Core Concepts"
  },
  {
    id: "plpq33",
    question: "Every complex design results at some level from the interaction of:",
    options: [
      "Color, value, and texture",
      "Layers, transparency, and contrast",
      "Space, shape, and form",
      "Points, lines, and planes"
    ],
    correctAnswer: 3,
    explanation: "Points, lines, and planes! All complex design is built from these fundamental elements. Point → Line → Plane is the foundation of all visual design.",
    topic: "Core Concepts"
  },
  {
    id: "plpq_new1",
    question: "According to Lupton, what does she mean by the 'grammar of visual design'? (p.32)",
    options: [
      "The rules of typography",
      "Points, lines, and planes are the fundamental vocabulary that all design is built from",
      "The color wheel and its relationships",
      "The grid system for page layout"
    ],
    correctAnswer: 1,
    explanation: "Just like language has grammar (nouns, verbs, sentences), DESIGN has grammar — points, lines, and planes. Master these building blocks and you can create anything!",
    topic: "Core Concepts"
  },
  {
    id: "plpq34",
    question: "A line is _________.",
    options: [
      "A flat surface",
      "A series of points",
      "A three-dimensional object",
      "A single dot"
    ],
    correctAnswer: 1,
    explanation: "A series of points! A line is formed when points connect together. It has length but no width.",
    topic: "Line"
  },
  {
    id: "plpq35",
    question: "Which of the following are 'things' lines 'can do'?",
    options: [
      "Express emotion, describe structure and edges, define a shape",
      "Express color and tone",
      "Define transparency and contrast",
      "Describe hierarchy and scale"
    ],
    correctAnswer: 0,
    explanation: "Lines can express emotions (jagged = chaos, wavy = calm), describe structure and edges, and when closed, define shapes. Lines can also turn and multiply to describe planes!",
    topic: "Line"
  },
  {
    id: "plpq36",
    question: "A plane is the path of a moving line; it is a line with breadth.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True! A plane is formed when a line moves through space or gains breadth/thickness. This is how lines build up to create planes.",
    topic: "Plane"
  },
  {
    id: "plpq37",
    question: "Which of the following can be a plane and which cannot be a plane?",
    options: [
      "CAN be planes: field of text, ceiling/walls/floors/windows, contents of a photograph, 2D shape. CANNOT be planes: light, a person",
      "CAN be planes: light, a person, 2D shape. CANNOT be planes: field of text, ceiling/walls/floors/windows",
      "All of them can be planes",
      "Only 2D shapes can be planes"
    ],
    correctAnswer: 0,
    explanation: "Planes are flat surfaces! Text blocks, architectural surfaces, photographs, and 2D shapes are all planes. Light is energy (not a plane), and a person is a 3D volume/form (not a plane).",
    topic: "Plane"
  },
  {
    id: "plpq3",
    question: "What characteristic does a point have?",
    options: [
      "It has length and width",
      "It has no size but marks a position",
      "It has depth",
      "It has only length"
    ],
    correctAnswer: 1,
    explanation: "A point marks a position in space and has no size, though it appears as a dot. It's purely a LOCATION.",
    topic: "Point"
  },
  {
    id: "plpq4",
    question: "What happens when many points are grouped together?",
    options: [
      "They create volume",
      "They create shapes only",
      "They create lines, textures, and shading",
      "They disappear"
    ],
    correctAnswer: 2,
    explanation: "Many points create lines, textures, and shading depending on how they're arranged. Your brain automatically connects nearby points!",
    topic: "Point"
  },
  {
    id: "plpq5",
    question: "In typography, what is an example of a point?",
    options: ["A comma", "A period", "A letter", "A word"],
    correctAnswer: 1,
    explanation: "In typography, a period is a point — it marks a position and appears as a dot.",
    topic: "Point"
  },
  {
    id: "plpq31",
    question: "In typography, each character in a field of text is a singular element, and thus a kind of ____________.",
    options: ["Point", "Line", "Plane", "Shape"],
    correctAnswer: 0,
    explanation: "Point! Each character is a singular element that marks a position in space, just like a point. It's all about scale — zoom out and letters become points in the texture of a paragraph.",
    topic: "Point"
  },
  {
    id: "plpq32",
    question: "Fill in the blank: Points mark a position in _________.",
    options: ["Space", "Time", "Color", "Texture"],
    correctAnswer: 0,
    explanation: "Space! A point marks a position in space. It has no size but appears as a dot to indicate location.",
    topic: "Point"
  },
  {
    id: "plpq_new2",
    question: "When you scatter points across a page, what does your brain automatically do? (p.32-33)",
    options: [
      "Ignores them",
      "Connects them into implied lines and shapes",
      "Sees them as colors",
      "Groups them by size only"
    ],
    correctAnswer: 1,
    explanation: "Your brain automatically connects nearby points into implied lines and shapes — like connect-the-dots! Designers use this to guide where your eye goes.",
    topic: "Point"
  },
  {
    id: "plpq6",
    question: "What is a line made of?",
    options: [
      "A series of planes",
      "A series of points",
      "A series of shapes",
      "A single point"
    ],
    correctAnswer: 1,
    explanation: "A line is a series of points. It has length but no width.",
    topic: "Line"
  },
  {
    id: "plpq7",
    question: "What dimensions does a line have?",
    options: [
      "Length and width",
      "Length only",
      "Width and height",
      "Length, width, and depth"
    ],
    correctAnswer: 1,
    explanation: "A line has length but no width. It's one-dimensional.",
    topic: "Line"
  },
  {
    id: "plpq8",
    question: "What can lines show in design?",
    options: [
      "Only direction",
      "Only emotion",
      "Direction, emotion, and structure",
      "Only structure"
    ],
    correctAnswer: 2,
    explanation: "Lines show direction, emotion, and structure. Thick = bold, thin = delicate, wavy = calm, jagged = chaos!",
    topic: "Line"
  },
  {
    id: "plpq9",
    question: "What happens when lines build up?",
    options: [
      "They create points",
      "They create planes",
      "They create volume",
      "They create texture"
    ],
    correctAnswer: 1,
    explanation: "When lines build up, they create planes — the next level in the design hierarchy (Point → Line → Plane).",
    topic: "Line"
  },
  {
    id: "plpq_new3",
    question: "In information design (like subway maps), what role do lines play? (p.38)",
    options: [
      "They add decoration",
      "They connect data points and show relationships",
      "They fill empty space",
      "They only create borders"
    ],
    correctAnswer: 1,
    explanation: "Lines connect data points and show relationships! In maps, lines become borders, roads, and rivers. Different line styles (dashed, dotted, thick) encode different types of information.",
    topic: "Line"
  },
  {
    id: "plpq_new4",
    question: "A thick line conveys _______ while a thin line conveys _______. (p.36-37)",
    options: [
      "Calm; chaos",
      "Boldness/strength; delicacy",
      "Sadness; happiness",
      "Depth; flatness"
    ],
    correctAnswer: 1,
    explanation: "Thick lines feel bold and strong, while thin lines feel delicate and refined. Line weight is a key way to express emotion in design!",
    topic: "Line"
  },
  {
    id: "plpq10",
    question: "What is a plane?",
    options: [
      "A 3D object",
      "A flat surface with height and width",
      "A curved line",
      "A series of points"
    ],
    correctAnswer: 1,
    explanation: "A plane is a flat surface with height and width. It's two-dimensional.",
    topic: "Plane"
  },
  {
    id: "plpq11",
    question: "How is a plane formed?",
    options: [
      "When points connect",
      "When lines enclose space or gain thickness",
      "When shapes overlap",
      "When colors blend"
    ],
    correctAnswer: 1,
    explanation: "A plane is formed when lines enclose space or gain thickness. It's the next step: Point → Line → Plane.",
    topic: "Plane"
  },
  {
    id: "plpq12",
    question: "What are shapes in terms of design elements?",
    options: ["Points", "Lines", "Planes", "Volumes"],
    correctAnswer: 2,
    explanation: "Shapes are planes — they have height and width but no depth.",
    topic: "Plane"
  },
  {
    id: "plpq_new5",
    question: "How do overlapping planes create the illusion of depth? (p.42-43)",
    options: [
      "By changing colors",
      "By creating a layered effect where the 'top' plane appears closer",
      "By using only dark colors",
      "By making all planes the same size"
    ],
    correctAnswer: 1,
    explanation: "Overlapping planes create depth — like shuffling cards. The plane 'on top' appears closer. Add transparency and you get even more complex layered effects!",
    topic: "Plane"
  },
  {
    id: "plpq13",
    question: "What is volume in design?",
    options: [
      "A flat surface",
      "3D space with height, width, and depth",
      "A series of lines",
      "A type of texture"
    ],
    correctAnswer: 1,
    explanation: "Volume is 3D space with height, width, and depth — it's three-dimensional. On a 2D surface, it's always an ILLUSION created by shading and perspective.",
    topic: "Space & Volume"
  },
  {
    id: "plpq14",
    question: "What is linear perspective used for?",
    options: [
      "Creating flat designs",
      "Creating realistic depth where things get smaller",
      "Creating diagrams",
      "Creating patterns"
    ],
    correctAnswer: 1,
    explanation: "Linear perspective creates realistic depth where things get smaller as they recede into the distance — like looking down train tracks!",
    topic: "Space & Volume"
  },
  {
    id: "plpq15",
    question: "What is axonometric perspective?",
    options: [
      "Perspective with no size change, used in diagrams and games",
      "Perspective where things get smaller",
      "Perspective used only in photos",
      "A curved perspective"
    ],
    correctAnswer: 0,
    explanation: "Axonometric perspective has no size change and is used in diagrams, technical drawings, and games for flat 3D representation.",
    topic: "Space & Volume"
  },
  {
    id: "plpq16",
    question: "Which type of perspective makes objects appear smaller as they recede?",
    options: ["Axonometric", "Isometric", "Linear perspective", "Flat perspective"],
    correctAnswer: 2,
    explanation: "Linear perspective makes objects appear smaller as they recede into the distance, creating realistic depth.",
    topic: "Space & Volume"
  },
  {
    id: "plpq_new6",
    question: "Which of these is NOT a way designers create the illusion of 3D on a 2D surface? (p.44-45)",
    options: [
      "Overlap and shading",
      "Linear perspective",
      "Changing the font",
      "Size differences (bigger = closer)"
    ],
    correctAnswer: 2,
    explanation: "Changing the font doesn't create 3D illusion! But overlap, shading, perspective, size differences, transparency, and color temperature (warm = close, cool = far) all do.",
    topic: "Space & Volume"
  },
  {
    id: "plpq17",
    question: "How are texture and tone created in design?",
    options: [
      "By using color only",
      "By repeating points and lines",
      "By using large shapes",
      "By using gradients"
    ],
    correctAnswer: 1,
    explanation: "Repeating points and lines create texture and tone. The density and pattern determine the visual effect — tight dots = dark, sparse dots = light.",
    topic: "Texture & Patterns"
  },
  {
    id: "plpq18",
    question: "What is the halftone process?",
    options: [
      "Using lines to create shading",
      "Using dots to simulate shading",
      "Using colors to create gradients",
      "Using shapes to create patterns"
    ],
    correctAnswer: 1,
    explanation: "The halftone process uses dots (points) to simulate shading and grayscale images in printing. This is how ALL printed photos work!",
    topic: "Printing"
  },
  {
    id: "plpq19",
    question: "In halftone printing, what creates darker areas?",
    options: [
      "Smaller, farther apart dots",
      "Lighter colored dots",
      "Closer/larger dots",
      "Fewer dots"
    ],
    correctAnswer: 2,
    explanation: "Closer/larger dots create darker areas, while farther/smaller dots create lighter areas in halftone printing.",
    topic: "Printing"
  },
  {
    id: "plpq20",
    question: "What are Bézier curves defined by?",
    options: [
      "Pixels and colors",
      "Anchor points (ends) and control points (shape)",
      "Lines and planes",
      "Dots and dashes"
    ],
    correctAnswer: 1,
    explanation: "Bézier curves are defined by anchor points (ends) and control points (shape). They're the math behind every curve in vector graphics — and the Pen tool!",
    topic: "Bézier Curves"
  },
  {
    id: "plpq21",
    question: "Where are Bézier curves commonly used?",
    options: [
      "Raster images",
      "Vector graphics",
      "Photographs",
      "Textures"
    ],
    correctAnswer: 1,
    explanation: "Bézier curves are used in vector graphics to create smooth, scalable curves that maintain quality at any size.",
    topic: "Bézier Curves"
  },
  {
    id: "plpq22",
    question: "Using the quick cram: What does 'Point' represent?",
    options: ["Movement", "Surface", "Dot", "Depth"],
    correctAnswer: 2,
    explanation: "Point = dot. It's the simplest element that marks a position.",
    topic: "Quick Cram"
  },
  {
    id: "plpq23",
    question: "Using the quick cram: What does 'Line' represent?",
    options: ["Dot", "Movement", "Surface", "Flat 3D"],
    correctAnswer: 1,
    explanation: "Line = movement. Lines show direction and movement through space.",
    topic: "Quick Cram"
  },
  {
    id: "plpq24",
    question: "Using the quick cram: What does 'Plane' represent?",
    options: ["Dot", "Movement", "Surface", "Depth"],
    correctAnswer: 2,
    explanation: "Plane = surface. Planes are flat surfaces with height and width.",
    topic: "Quick Cram"
  },
  {
    id: "plpq25",
    question: "Using the quick cram: What does 'Perspective' represent?",
    options: ["Depth", "Flat 3D", "Controlled curve", "Surface"],
    correctAnswer: 0,
    explanation: "Perspective = depth. It creates the illusion of three-dimensional space.",
    topic: "Quick Cram"
  },
  {
    id: "plpq26",
    question: "Using the quick cram: What does 'Axonometric' represent?",
    options: ["Depth", "Flat 3D", "Movement", "Dot"],
    correctAnswer: 1,
    explanation: "Axonometric = flat 3D. It shows 3D objects without size change based on distance.",
    topic: "Quick Cram"
  },
  {
    id: "plpq27",
    question: "Using the quick cram: What does 'Bézier' represent?",
    options: ["Controlled curve", "Flat 3D", "Depth", "Movement"],
    correctAnswer: 0,
    explanation: "Bézier = controlled curve. Bézier curves are defined by anchor and control points.",
    topic: "Quick Cram"
  },
  {
    id: "plpq28",
    question: "A point has both length and width.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False! A point has no size — it only marks a position in space.",
    topic: "Point"
  },
  {
    id: "plpq29",
    question: "Lines can show emotion and structure in design.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True! Lines show direction, emotion, and structure — thick = bold, thin = delicate, wavy = calm, jagged = chaos!",
    topic: "Line"
  },
  {
    id: "plpq30",
    question: "Axonometric perspective makes objects appear smaller as they recede.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False! Axonometric has no size change. Linear perspective makes objects smaller as they recede.",
    topic: "Space & Volume"
  }
];

// ========== MODULE 2: RHYTHM, BALANCE, SCALE, TEXTURE, COLOR, FIGURE/GROUND QUIZ (Pages 48-67) ==========
const mod2QuizQuestions = [
  {
    id: "m2q1",
    question: "What is RHYTHM in graphic design? (p.48-49)",
    options: [
      "Using only one color throughout a design",
      "Repeating visual elements to create pattern and movement",
      "Making everything the same size",
      "Using only straight lines"
    ],
    correctAnswer: 1,
    explanation: "Rhythm = repeating visual elements (shapes, colors, lines) to create pattern and movement — like a beat in music! 🥁",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q2",
    question: "What are the TWO main types of balance in design? (p.50-51)",
    options: [
      "Horizontal and vertical",
      "Light and dark",
      "Symmetrical and asymmetrical",
      "Big and small"
    ],
    correctAnswer: 2,
    explanation: "Symmetrical (mirror image, formal, calm ⚖️) and Asymmetrical (unequal but balanced, dynamic, energetic ⚡). There's also radial balance!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q3",
    question: "Symmetrical balance means both sides of a design are mirror images of each other.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True! Symmetrical balance = fold it in half and both sides match. Think: butterfly, wedding invite. Formal and stable!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q4",
    question: "In asymmetrical balance, a large dark shape on one side can be balanced by:",
    options: [
      "An identical dark shape on the other side",
      "Nothing — it can't be balanced",
      "Several smaller, lighter shapes on the other side",
      "Only another large dark shape"
    ],
    correctAnswer: 2,
    explanation: "Asymmetrical balance uses DIFFERENT elements that feel equal in visual weight — a big dark shape can be balanced by several small light shapes, like a seesaw!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q5",
    question: "Which of these creates MORE visual weight? (p.51)",
    options: [
      "Small size, light color, simple texture",
      "Bigger size, darker color, complex texture, isolation on page",
      "Being centered on the page",
      "Using only cool colors"
    ],
    correctAnswer: 1,
    explanation: "Visual weight increases with: bigger size, darker color, complex texture, isolation (alone on the page), and bright/warm colors. These elements 'pull' your eye more!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q6",
    question: "What is RADIAL balance? (p.51)",
    options: [
      "Balance along a horizontal line",
      "Elements radiating outward from a center point",
      "Balance between text and images",
      "Using only circular shapes"
    ],
    correctAnswer: 1,
    explanation: "Radial balance = elements radiate outward from a center point, like a sunburst ☀️, mandala, or flower 🌸. Naturally draws your eye to the middle!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q7",
    question: "Asymmetrical balance feels more _______ than symmetrical balance.",
    options: [
      "Boring and static",
      "Dynamic and energetic",
      "Formal and traditional",
      "Confusing and messy"
    ],
    correctAnswer: 1,
    explanation: "Asymmetrical balance feels dynamic and energetic! It's more visually interesting (but harder to pull off) than the calm formality of symmetrical balance.",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q7b",
    question: "Balance is a catalyst for form that ________ and ________ elements in space.",
    options: [
      "Hides and reveals",
      "Arranges and stabilizes",
      "Enlarges and reduces",
      "Colors and textures"
    ],
    correctAnswer: 1,
    explanation: "Balance is a catalyst for form that ARRANGES and STABILIZES elements in space. It's the principle that determines how visual weight is distributed so a design feels intentional and cohesive!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q7c",
    question: "Match the definition: SYMMETRY uses ________ elements on at least two sides along a common axis.",
    options: [
      "Different",
      "Identical",
      "Random",
      "Overlapping"
    ],
    correctAnswer: 1,
    explanation: "SYMMETRY = IDENTICAL elements on at least two sides along a common axis (mirror image). ASYMMETRY = DIFFERENT elements on at least two sides along a common axis. Same axis, different approach!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q7d",
    question: "Match the definition: ASYMMETRY uses ________ elements on at least two sides along a common axis.",
    options: [
      "Identical",
      "Overlapping",
      "Different",
      "Mirrored"
    ],
    correctAnswer: 2,
    explanation: "ASYMMETRY = DIFFERENT elements on at least two sides along a common axis. Unlike symmetry (identical/mirrored), asymmetry achieves balance through contrast — different elements that still feel visually equal!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q8",
    question: "What is SCALE in design? (p.52-53)",
    options: [
      "The weight of an object",
      "The color of an element",
      "The size of an element relative to other elements or the page",
      "The number of elements in a design"
    ],
    correctAnswer: 2,
    explanation: "Scale = size RELATIVE to something else. It's about relationships! A tiny dot on a huge page is very different from the same dot crammed among other elements.",
    topic: "Scale"
  },
  {
    id: "m2q9",
    question: "How do designers use scale to create hierarchy? (p.54-55)",
    options: [
      "Making everything the same size",
      "Using only small elements",
      "Making more important elements BIGGER to draw attention first",
      "Putting everything in alphabetical order"
    ],
    correctAnswer: 2,
    explanation: "Bigger = more important (usually)! Headlines are BIG, body text is small. Scale differences tell viewers: 'LOOK HERE FIRST!' Without scale contrast, everything competes.",
    topic: "Scale"
  },
  {
    id: "m2q10",
    question: "What's the difference between SCALE and PROPORTION? (p.53)",
    options: [
      "They are the same thing",
      "Scale = size relative to something else; Proportion = internal size relationships within an object",
      "Scale is for print; Proportion is for digital",
      "Proportion is bigger than scale"
    ],
    correctAnswer: 1,
    explanation: "Scale = size relative to other things. Proportion = internal ratios (width to height). You can resize a photo (change scale) while keeping the same proportions!",
    topic: "Scale"
  },
  {
    id: "m2q11",
    question: "What effect does UNEXPECTED scale create? (p.55-57)",
    options: [
      "It makes the design look broken",
      "It creates surprise, visual tension, and memorable impact",
      "It always looks unprofessional",
      "It only works in photography"
    ],
    correctAnswer: 1,
    explanation: "Unexpected scale = surprise and impact! Making something tiny huge (or vice versa) creates visual tension and grabs attention. Designers use this to challenge expectations!",
    topic: "Scale"
  },
  {
    id: "m2q12",
    question: "Without scale contrast in a design, what happens?",
    options: [
      "The design looks perfect",
      "Everything competes for attention and nothing wins",
      "The viewer reads faster",
      "Colors appear brighter"
    ],
    correctAnswer: 1,
    explanation: "Without scale contrast, everything is the same visual importance — so nothing stands out! The viewer doesn't know where to look first. Scale creates visual hierarchy.",
    topic: "Scale"
  },
  {
    id: "m2q13",
    question: "What is TEXTURE in graphic design? (p.60-61)",
    options: [
      "Only the color of a surface",
      "The surface quality of a design element (actual or visual)",
      "The size of an element",
      "The number of layers in a design"
    ],
    correctAnswer: 1,
    explanation: "Texture = surface quality! Can be ACTUAL (you can feel it — embossing) or VISUAL (only looks textured — pattern of dots, photo of wood grain). Adds richness to flat designs!",
    topic: "Texture"
  },
  {
    id: "m2q14",
    question: "What's the difference between actual texture and visual texture? (p.60-61)",
    options: [
      "Actual texture is colorful; visual texture is gray",
      "Actual texture = physical, you can feel it; Visual texture = appears textured but is flat",
      "They are the same thing",
      "Visual texture is only for digital; actual texture is only for print"
    ],
    correctAnswer: 1,
    explanation: "Actual texture = tactile, you can FEEL it (embossed paper, rough canvas). Visual texture = LOOKS textured but is flat (photo of wood, pattern of dots). In digital design, almost all texture is visual!",
    topic: "Texture"
  },
  {
    id: "m2q15",
    question: "How do points and lines from Module 1 connect to texture? (p.61-62)",
    options: [
      "They don't connect at all",
      "Repeated tiny points = stippled texture; repeated thin lines = hatched texture",
      "Points make color and lines make shapes",
      "Texture replaces points and lines"
    ],
    correctAnswer: 1,
    explanation: "Full circle! 🔄 Repeat tiny points = stippled texture. Repeat thin lines = hatched texture. The density, size, and spacing control how dark/light and rough/smooth it appears. Module 1 → Module 2!",
    topic: "Texture"
  },
  {
    id: "m2q16",
    question: "What are the THREE basic properties of color? (p.62-63)",
    options: [
      "RGB, CMYK, and Hex",
      "Primary, secondary, and tertiary",
      "Hue, Saturation, and Value",
      "Warm, cool, and neutral"
    ],
    correctAnswer: 2,
    explanation: "Hue = color name (red, blue). Saturation = intensity/purity (vivid vs muted). Value = lightness/darkness (tint = add white, shade = add black). Master these 3 = master color!",
    topic: "Color"
  },
  {
    id: "m2q17",
    question: "What is HUE? (p.62)",
    options: [
      "How light or dark a color is",
      "The name of the color (red, blue, green, etc.)",
      "How vivid a color is",
      "The transparency of a color"
    ],
    correctAnswer: 1,
    explanation: "Hue = the actual color name. Red, blue, green, yellow — these are all hues. It's the most basic identifier of a color!",
    topic: "Color"
  },
  {
    id: "m2q18",
    question: "What is SATURATION? (p.62-63)",
    options: [
      "The lightness or darkness of a color",
      "The name of a color",
      "The intensity or purity of a color (vivid vs muted/gray)",
      "The temperature of a color"
    ],
    correctAnswer: 2,
    explanation: "Saturation = how vivid or muted a color is. Full saturation = pure, vivid color. Low saturation = washed out, grayish. Desaturated colors feel calmer; saturated colors pop!",
    topic: "Color"
  },
  {
    id: "m2q19",
    question: "What is VALUE in color? (p.63)",
    options: [
      "How expensive the ink is",
      "The lightness or darkness of a color (tint vs shade)",
      "The name of the color",
      "How vivid the color is"
    ],
    correctAnswer: 1,
    explanation: "Value = lightness/darkness. Add white to a color = tint (lighter). Add black = shade (darker). Value is crucial for creating contrast and readability!",
    topic: "Color"
  },
  {
    id: "m2q20",
    question: "RGB color is _______ (adding light) and CMYK is _______ (adding ink). (p.63-64)",
    options: [
      "Subtractive; Additive",
      "Additive; Subtractive",
      "Digital; Analog",
      "Print; Screen"
    ],
    correctAnswer: 1,
    explanation: "RGB = ADDITIVE (more color = brighter, all colors = white). CMYK = SUBTRACTIVE (more ink = darker, all colors = muddy black). RGB for screens, CMYK for print!",
    topic: "Color"
  },
  {
    id: "m2q21",
    question: "Warm colors (red, orange, yellow) tend to _______ while cool colors (blue, green) tend to _______. (p.64-65)",
    options: [
      "Recede backward; come forward",
      "Look smaller; look bigger",
      "Come forward; recede backward",
      "Look dimmer; look brighter"
    ],
    correctAnswer: 2,
    explanation: "Warm colors ADVANCE (come forward) and cool colors RECEDE (go backward). Warm on cool background = the warm element POPS forward! Sneaky depth trick!",
    topic: "Color"
  },
  {
    id: "m2q22",
    question: "Why is color CONTRAST important for design? (p.65-66)",
    options: [
      "It makes designs look expensive",
      "It's essential for readability and accessibility",
      "It only matters in print design",
      "It's purely decorative"
    ],
    correctAnswer: 1,
    explanation: "Color contrast is essential for READABILITY and ACCESSIBILITY. High contrast (black on white) = easy to read. Low contrast (light gray on white) = hard to read. If people can't read it, it doesn't matter how pretty it is!",
    topic: "Color"
  },
  {
    id: "m2q23",
    question: "What is FIGURE/GROUND in design? (p.66-67)",
    options: [
      "The frame around a picture",
      "Figure = the object you focus on; Ground = the background behind it",
      "The top and bottom of a page",
      "The difference between digital and print"
    ],
    correctAnswer: 1,
    explanation: "Figure = the subject your eye focuses on 🎯. Ground = the background/space behind it. Your brain ALWAYS tries to separate figure from ground!",
    topic: "Figure/Ground"
  },
  {
    id: "m2q24",
    question: "What are the THREE figure/ground relationships? (p.66-67)",
    options: [
      "Big, medium, and small",
      "Stable, reversible, and ambiguous",
      "Light, medium, and dark",
      "Simple, complex, and abstract"
    ],
    correctAnswer: 1,
    explanation: "STABLE = clear figure vs ground. REVERSIBLE = figure and ground can swap (vase/faces illusion!). AMBIGUOUS = can't tell which is which. Each creates a different visual effect!",
    topic: "Figure/Ground"
  },
  {
    id: "m2q25",
    question: "In a STABLE figure/ground relationship, what happens?",
    options: [
      "Figure and ground keep swapping",
      "You can't tell which is figure and which is ground",
      "The figure is clearly distinct from the ground — no confusion",
      "The ground disappears"
    ],
    correctAnswer: 2,
    explanation: "Stable = figure is clearly separate from the ground. Like black text on a white page — no confusion about what's the subject and what's the background!",
    topic: "Figure/Ground"
  },
  {
    id: "m2q26",
    question: "The classic 'vase and two faces' illusion is an example of what type of figure/ground relationship?",
    options: [
      "Stable",
      "Reversible",
      "Ambiguous",
      "Transparent"
    ],
    correctAnswer: 1,
    explanation: "Reversible! The figure and ground swap — sometimes you see a vase, sometimes you see two faces 🏺👤. Your brain flips between the two interpretations!",
    topic: "Figure/Ground"
  },
  {
    id: "m2q27",
    question: "What is NEGATIVE SPACE and why is it important? (p.67)",
    options: [
      "Empty, wasted space that should be filled",
      "Active design element — the 'empty' space around and between figures",
      "Space that doesn't have any color",
      "The margin of a page"
    ],
    correctAnswer: 1,
    explanation: "Negative space is NOT empty — it's an active design element! Think: the hidden arrow in the FedEx logo, or the bear in the Toblerone mountain. Great designers use negative space intentionally!",
    topic: "Figure/Ground"
  },
  {
    id: "m2q28",
    question: "A tint is created by adding _______ to a color, while a shade is created by adding _______.",
    options: [
      "Black; white",
      "White; black",
      "Gray; color",
      "Saturation; hue"
    ],
    correctAnswer: 1,
    explanation: "Tint = color + white (lighter). Shade = color + black (darker). These create different VALUES of the same hue!",
    topic: "Color"
  },
  {
    id: "m2q29",
    question: "Which design principle helps guide the viewer's eye through repeating visual elements?",
    options: [
      "Scale",
      "Balance",
      "Rhythm",
      "Figure/Ground"
    ],
    correctAnswer: 2,
    explanation: "Rhythm! Repeating visual elements (shapes, colors, lines) creates pattern and movement that guides the eye through the design — like a visual beat!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q30",
    question: "In the FedEx logo, the arrow between the E and x is an example of:",
    options: [
      "Asymmetrical balance",
      "Negative space used as an active design element",
      "Visual rhythm",
      "Color contrast"
    ],
    correctAnswer: 1,
    explanation: "The FedEx arrow is a brilliant use of NEGATIVE SPACE! The 'empty' space between letters forms a hidden arrow — negative space used as a secret second design!",
    topic: "Figure/Ground"
  },
  {
    id: "m2q31",
    question: "Desaturated colors feel _______ while highly saturated colors feel _______.",
    options: [
      "Energetic; calm",
      "Calm/muted; vivid/attention-grabbing",
      "Dark; light",
      "Warm; cool"
    ],
    correctAnswer: 1,
    explanation: "Desaturated (less vivid) colors feel calm and muted. Highly saturated (vivid) colors feel energetic and grab attention. Saturation controls the intensity!",
    topic: "Color"
  },
  {
    id: "m2q32",
    question: "Which statement about texture in digital design is TRUE? (p.60-61)",
    options: [
      "Digital designs can only use actual texture",
      "Almost all texture in digital design is VISUAL texture because screens are smooth",
      "Texture can't be used in digital design",
      "Digital texture is always 3D"
    ],
    correctAnswer: 1,
    explanation: "Since screens are smooth/flat, almost all texture in digital design is VISUAL texture — it looks textured but you can't feel it. Actual texture (tactile) is mainly for print!",
    topic: "Texture"
  },
  // ===== LECTURE: The Design Desk — Rhythm, Balance, Scale Examples =====
  {
    id: "m2q_lec1",
    question: "In Jules Chéret's Art Nouveau poster for Les Girard, what creates the sense of visual rhythm?",
    options: [
      "Bold typography and color blocks",
      "The dancers' legs and coattails creating implied syncopation through line work",
      "Geometric shapes arranged in a grid",
      "Repeated photographs of dancers"
    ],
    correctAnswer: 1,
    explanation: "The legs and coattails of the dancers create an alternating visual 'beat' — like syncopation in music! Art Nouveau was masterful at creating implied rhythm through flowing line work.",
    topic: "Rhythm (Lecture)"
  },
  {
    id: "m2q_lec2",
    question: "Will H. Bradley's 'The Chap-Book' cover uses balance in an unusual way. What makes it clever?",
    options: [
      "It uses a perfectly symmetrical layout",
      "The large billowy robe/dress feels like negative space, counterbalanced by the small typography and blue background",
      "It has equal amounts of text and image",
      "It uses a standard grid system"
    ],
    correctAnswer: 1,
    explanation: "The illustration's robe is SO large it starts to feel like negative space itself. Then the small typography and blue field serve as the visual anchor — a really clever inversion of typical figure/ground!",
    topic: "Balance (Lecture)"
  },
  {
    id: "m2q_lec3",
    question: "Fritz Ehler's 'Jugend' magazine cover (1896) has only two elements. What makes it a masterful example of balance?",
    options: [
      "The two elements are the same size and weight",
      "The extensive negative space counterbalances the graphic — you could draw a diagonal where content weight equals empty space weight",
      "It uses radial symmetry to center everything",
      "It relies on bright colors to create balance"
    ],
    correctAnswer: 1,
    explanation: "With just a figure and a word mark, ALL the negative space serves to counterbalance. You could draw a perfect diagonal where the visual weight of the content equals the weight of the emptiness!",
    topic: "Balance (Lecture)"
  },
  {
    id: "m2q_lec4",
    question: "What was the Sachplakat movement (c.1905) a reaction against?",
    options: [
      "Minimalism and simplicity",
      "The Industrial Revolution's mass production",
      "Art Nouveau's overly decorative, flowery aesthetic",
      "Abstract expressionism"
    ],
    correctAnswer: 2,
    explanation: "Sachplakat valued SIMPLICITY as a reaction to Art Nouveau's overly flowery, decorative style. Ads became stripped-down: just a logo, an illustration, and a bold color field. Priester matches is a classic example!",
    topic: "Balance (Lecture)"
  },
  {
    id: "m2q_lec5",
    question: "According to the lecture, where should white space be placed for effective visual balance?",
    options: [
      "On the inside of the composition, between elements",
      "Only at the top of the page",
      "On the OUTSIDE/edges, creating a propulsion effect that holds content in the center",
      "White space should be eliminated entirely"
    ],
    correctAnswer: 2,
    explanation: "White space on the OUTSIDE acts like anti-gravity — it propels content inward and makes it feel suspended/floating. White space on the INSIDE makes designs feel blown apart and disconnected!",
    topic: "Balance (Lecture)"
  },
  {
    id: "m2q_lec6",
    question: "Josef Müller-Brockmann's Beethoven poster (1955, International Style) demonstrates all of these EXCEPT:",
    options: [
      "Rhythm through spinning, flowing black bars",
      "Balance through white space interlocking with black forms",
      "Scale through large graphic bars leading down to small focused typography",
      "Texture through embossed paper and physical surface treatments"
    ],
    correctAnswer: 3,
    explanation: "The Beethoven poster demonstrates rhythm (spinning bars = musical crescendos), balance (white space locks into black forms), and scale (big bars → tiny type = hierarchy). It does NOT demonstrate physical texture — it's a flat printed poster!",
    topic: "Balance & Scale (Lecture)"
  },
  {
    id: "m2q_lec7",
    question: "The 'Silence = Death' poster (1987) is powerful because of its:",
    options: [
      "Complex layered typography and many visual elements",
      "Minimal elements (pink triangle + text) counterbalanced by vast empty black space",
      "Use of bright, saturated colors across the entire surface",
      "Photographic imagery of the AIDS epidemic"
    ],
    correctAnswer: 1,
    explanation: "Just a pink triangle + 'Silence = Death' on a vast black field. The EMPTINESS is what makes it powerful — minimal elements + maximum negative space = maximum emotional impact. A masterclass in scale AND balance.",
    topic: "Balance & Scale (Lecture)"
  },
  {
    id: "m2q_lec8",
    question: "In Paula Scher's Public Theater poster (1995), how does SCALE guide the viewer's eye?",
    options: [
      "All text is the same size so viewers can start anywhere",
      "Biggest text first → progressively smaller text creates reading order: title → show name → details → location/membership",
      "Images are larger than text to draw attention",
      "The poster uses no scale variation"
    ],
    correctAnswer: 1,
    explanation: "'The Public Theater' is biggest (read first) → 'Bring in da Noise, Bring in da Funk' next → details get smaller → location info last. Scale creates a clear hierarchy even in a maximalist design!",
    topic: "Scale (Lecture)"
  },
  {
    id: "m2q_lec9",
    question: "According to the lecture, which is usually HARDER to achieve — balance in minimalist or maximalist design?",
    options: [
      "Maximalist, because there are more elements to juggle",
      "They're equally difficult",
      "Minimalist, because with only 2-3 elements every placement matters enormously",
      "Neither — balance happens automatically"
    ],
    correctAnswer: 2,
    explanation: "Minimalist is HARDER! With only a few elements, every single placement is critical. Maximalist designs have many elements to distribute and balance, which is often easier to arrange than getting 2-3 things perfect.",
    topic: "Scale (Lecture)"
  },
  {
    id: "m2q_lec10",
    question: "What creates effective RHYTHM in multi-page documents like photo books?",
    options: [
      "Making every page layout identical",
      "Alternating between dense visual content and breathing room/negative space across spreads",
      "Using only text with no images",
      "Randomizing layouts with no consistent structure"
    ],
    correctAnswer: 1,
    explanation: "Multi-page rhythm = syncopation! Large images → smaller images pushing to the edge → turn page → rewarded with breathing room → builds up again. The growth and rest cycle keeps readers engaged!",
    topic: "Rhythm (Lecture)"
  },
  {
    id: "m2q_lec11",
    question: "What makes multi-page rhythm work WITHOUT confusing or losing the reader?",
    options: [
      "Using a different font on every page for variety",
      "Making all pages identical",
      "Self-sustained rules: consistent margins, typography, and grids — but varying HOW elements fill the grid",
      "Removing all white space between sections"
    ],
    correctAnswer: 2,
    explanation: "Consistent structure (same margins, type, grid) creates CONTINUITY so readers aren't lost. But varying content WITHIN that structure creates SURPRISE and DELIGHT. Rules + variation = engaged reader!",
    topic: "Rhythm (Lecture)"
  },
  {
    id: "m2q_lec12",
    question: "In the Monster Children magazine, what balances the 'unhinged' or expressive editorial spreads?",
    options: [
      "Blank white pages between every spread",
      "Clean, grounded, simple spreads that counterbalance the crazy ones — plus an underlying grid system",
      "Warning labels telling readers what's coming next",
      "Identical layouts throughout the entire magazine"
    ],
    correctAnswer: 1,
    explanation: "There's a grid UNDERNEATH that allows expressive moments (Ray Gun-inspired typography) to happen, then clean/simple spreads bring the reader back to stable ground. Full-page images serve as rest moments!",
    topic: "Rhythm (Lecture)"
  },
  {
    id: "m2q_lec13",
    question: "How does visual rhythm appear in digital interfaces like the iPhone News app?",
    options: [
      "All cards are the same size and layout",
      "Cards use syncopated rhythms: big cards → section banners → different card layouts → rhythm shifts from vertical to horizontal",
      "There is no rhythm in digital interfaces",
      "Only text-based rhythm exists in apps"
    ],
    correctAnswer: 1,
    explanation: "Digital rhythm! Big edge-to-edge cards → section dividers break the pattern → title-left/image-right cards → pattern changes per section → scrolling shifts from vertical to horizontal. Visual rhythm is everywhere in our apps!",
    topic: "Rhythm (Lecture)"
  },
  {
    id: "m2q_lec14",
    question: "In the Priester matches Sachplakat ad, the black field of color:",
    options: [
      "Is just empty wasted space",
      "Creates visual noise and distraction",
      "Acts as a CONTAINER that makes the illustration feel like it's floating in space",
      "Is meant to represent nighttime"
    ],
    correctAnswer: 2,
    explanation: "The black field isn't just empty — it's almost like a container that holds up and suspends the illustration, making it feel like it's floating in space. Negative space as an active design element!",
    topic: "Balance (Lecture)"
  },
  {
    id: "m2q_lec15",
    question: "What is a 'dos-à-dos' (do-si-do) book design?",
    options: [
      "A book with fold-out pages",
      "A book that reads from both ends toward the middle, with different content from each direction",
      "A book with no page numbers",
      "A book designed to be read upside down"
    ],
    correctAnswer: 1,
    explanation: "Dos-à-dos means the book reads differently from front and back! In the lecture example, French text read front-to-middle, and English text read back-to-middle. A unique design structure!",
    topic: "Rhythm (Lecture)"
  },
  {
    id: "m2q_lec16",
    question: "Nikolai Punin's 1920 Russian Suprematism poster demonstrates balance through:",
    options: [
      "Asymmetrical placement of text at different angles",
      "Centered, justified content with white space on the exterior holding it up",
      "Overlapping images and text layers",
      "Bright colors balancing dark backgrounds"
    ],
    correctAnswer: 1,
    explanation: "Content is centered and justified with plenty of white space on the exterior. The white space on the outside acts like anti-gravity — holding the content up and into the center of the composition!",
    topic: "Balance (Lecture)"
  },
  {
    id: "m2q_lec17",
    question: "Which design era/movement valued simplicity as a reaction against Art Nouveau's decorative excess?",
    options: [
      "Russian Suprematism",
      "International Style",
      "Sachplakat",
      "Postmodernism"
    ],
    correctAnswer: 2,
    explanation: "Sachplakat (c.1905) came out of the industrial revolution and the height of Art Nouveau, valuing simplicity and straightforward product marketing. Simple logo + simple illustration + bold color field!",
    topic: "Design History (Lecture)"
  },
  {
    id: "m2q_lec18",
    question: "Match the designer to their work discussed in the lecture:",
    options: [
      "Paula Scher → Beethoven poster; Müller-Brockmann → Public Theater",
      "Jules Chéret → Les Girard poster; Josef Müller-Brockmann → Beethoven poster; Paula Scher → Public Theater poster",
      "Fritz Ehler → Silence = Death poster; Paula Scher → Jugend magazine",
      "Will H. Bradley → Priester matches; Jules Chéret → The Chap-Book"
    ],
    correctAnswer: 1,
    explanation: "Jules Chéret designed the Les Girard poster (Art Nouveau rhythm), Müller-Brockmann designed the Beethoven poster (International Style), and Paula Scher designed the Public Theater poster (postmodern maximalism)!",
    topic: "Design History (Lecture)"
  },
  {
    id: "m2q7e",
    question: "True or False: Repetition is rarely seen in the human environment.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    explanation: "FALSE! Repetition is seen EVERYWHERE in the human environment — from brick walls and floor tiles to rows of windows, keyboard keys, and grocery store shelves. It's one of the most common visual principles around us!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q7f",
    question: "Rhythm and pacing is most often utilized in what kind of print design?",
    options: [
      "Social media graphics",
      "Multi-page spreads or documents",
      "Packaging",
      "Posters and billboards"
    ],
    correctAnswer: 1,
    explanation: "Rhythm and pacing shine in MULTI-PAGE SPREADS or DOCUMENTS — think magazines, books, and brochures where a reader moves through sequential pages. The designer controls tempo across pages, creating visual rhythm from spread to spread!",
    topic: "Rhythm & Balance"
  },
  {
    id: "m2q7g",
    question: "Playing with scale can create which of the following? (Select the BEST answer)",
    options: [
      "Spatial illusions and conceptual relationships only",
      "Information hierarchies and visual layers only",
      "Modular grids only",
      "Spatial illusions, conceptual relationships, information hierarchies, visual layers, AND modular grids"
    ],
    correctAnswer: 3,
    explanation: "ALL of them! Playing with scale can create spatial illusions, conceptual relationships, information hierarchies, visual layers, AND modular grids. Scale is incredibly versatile — it affects how we perceive depth, meaning, importance, layering, and structure!",
    topic: "Scale"
  }
];

// ========== MODULE 3: TEXTURE & SCALE (Deep Dive) ==========
// Graphic Design: The New Basics, 2nd Ed. — Ellen Lupton & Jennifer Cole Phillips
// Texture pp.68-79 | Scale pp.80-97

const mod3Flashcards = [
  // --- TEXTURE (pp.68-79) ---
  {
    id: "m3_1",
    topic: "Texture",
    question: "What is texture in graphic design? (p.68)",
    answer: "Texture is the tactile or visual surface quality of a form. It refers to the feel or appearance of a surface — rough, smooth, bumpy, soft, hard, glossy, matte. In 2D design, texture is usually VISUAL (simulated), but in print it can also be ACTUAL (physical, like embossing or textured paper).",
    color: "#22c55e"
  },
  {
    id: "m3_2",
    topic: "Texture",
    question: "What's the difference between actual (tactile) texture and visual texture? (pp.68-69)",
    answer: "ACTUAL texture = you can physically FEEL it (embossed letterpress, rough paper, fabric, carved wood). VISUAL texture = creates the ILLUSION of texture on a flat surface through patterns, marks, photography, or digital effects. Most graphic design uses visual texture since screens and printed pages are smooth.",
    color: "#22c55e"
  },
  {
    id: "m3_3",
    topic: "Texture",
    question: "How can designers create visual texture? (pp.69-73)",
    answer: "Visual texture is created through: repetition of small marks (dots, lines, dashes), patterns (geometric or organic), photographic imagery of real surfaces (wood, stone, fabric), halftone screens, crosshatching, stippling, digital noise/grain, and typographic texture (dense blocks of text). Even TYPE creates texture when viewed from a distance!",
    color: "#22c55e"
  },
  {
    id: "m3_4",
    topic: "Texture",
    question: "How does typography function as texture? (pp.70-71)",
    answer: "A block of body text, viewed from a distance, becomes a gray textural field rather than readable words. The density, size, weight, and spacing of type all affect this texture. Light typefaces create a lighter texture; bold faces create darker texture. Leading (line spacing) affects how 'airy' or 'dense' the textural field appears.",
    color: "#22c55e"
  },
  {
    id: "m3_5",
    topic: "Texture",
    question: "What is a halftone and how does it relate to texture? (p.72)",
    answer: "A halftone converts a continuous-tone image (like a photo) into a pattern of dots of varying sizes. Large dots = dark areas, small dots = light areas. This dot pattern creates a visible TEXTURE, especially when enlarged. Halftones are the basis of printed photographs — newspapers show this clearly.",
    color: "#22c55e"
  },
  {
    id: "m3_6",
    topic: "Texture",
    question: "How do density and scale affect texture? (pp.73-75)",
    answer: "DENSITY: Tightly packed elements = dense, dark texture. Loosely spaced elements = open, light texture. SCALE: Small marks viewed at normal distance = smooth texture. The SAME marks enlarged = rougher, more visible pattern. Zooming in on any texture reveals its individual components.",
    color: "#22c55e"
  },
  {
    id: "m3_7",
    topic: "Texture",
    question: "What is the relationship between texture and pattern? (pp.74-76)",
    answer: "Texture and pattern are closely related but not identical. PATTERN = a regular, repeating decorative design (you can see the individual motif). TEXTURE = when the pattern elements are so small or dense they merge into an overall surface quality rather than distinct repeating units. Scale is the key difference — zoom out enough and pattern becomes texture!",
    color: "#22c55e"
  },
  {
    id: "m3_8",
    topic: "Texture",
    question: "How does texture create mood and meaning in design? (pp.76-79)",
    answer: "Texture carries emotional associations: rough/gritty textures feel raw, industrial, or handmade. Smooth/clean textures feel modern, polished, or corporate. Organic textures (wood, stone, leaves) feel natural and warm. Digital/geometric textures feel technological and precise. Designers choose textures to reinforce the message and personality of a design.",
    color: "#22c55e"
  },
  {
    id: "m3_9",
    topic: "Texture",
    question: "What is figure/ground in relation to texture? (p.77)",
    answer: "When texture fills both the figure AND the ground, the boundary between object and background can blur or dissolve. Texture can unify figure and ground (camouflage effect) or it can separate them (textured figure on smooth ground). This plays with the viewer's perception of depth and space.",
    color: "#22c55e"
  },
  {
    id: "m3_10",
    topic: "Texture",
    question: "How do digital tools expand the possibilities of texture? (pp.78-79)",
    answer: "Digital tools allow designers to: scan real textures and manipulate them, layer multiple textures with transparency/blending modes, generate procedural textures algorithmically, apply textures as masks or overlays, and mix photographic textures with vector graphics. The possibilities are virtually unlimited compared to traditional media.",
    color: "#22c55e"
  },
  // --- SCALE (pp.80-97) ---
  {
    id: "m3_11",
    topic: "Scale",
    question: "What is scale in design and why is it relational? (pp.80-81)",
    answer: "Scale is the size of an element RELATIVE to other elements, to the page, or to the human body. Nothing has a fixed 'big' or 'small' — it depends on context. A 2-inch circle is big on a business card but tiny on a billboard. Scale is always about RELATIONSHIPS, not absolute measurements.",
    color: "#ec4899"
  },
  {
    id: "m3_12",
    topic: "Scale",
    question: "How does scale create visual hierarchy? (pp.82-85)",
    answer: "Larger elements attract attention FIRST — they dominate the visual field and signal importance. Smaller elements recede and feel secondary. By varying scale, designers create a reading order: the eye goes to the BIGGEST element first, then moves to progressively smaller ones. This is the foundation of typographic hierarchy (headline → subhead → body).",
    color: "#ec4899"
  },
  {
    id: "m3_13",
    topic: "Scale",
    question: "What is the difference between scale and proportion? (pp.82-83)",
    answer: "SCALE = the overall size of something relative to something else (a giant 'A' on a small page). PROPORTION = the internal relationships within an object (the ratio of width to height). You can change an object's SCALE without changing its proportions (scaling up uniformly), or change proportions without changing overall scale (stretching one dimension).",
    color: "#ec4899"
  },
  {
    id: "m3_14",
    topic: "Scale",
    question: "How does manipulating scale create depth and spatial illusion? (pp.86-89)",
    answer: "In a flat composition, LARGER elements appear CLOSER (foreground) and SMALLER elements appear FARTHER AWAY (background). This mimics atmospheric perspective in the real world. Overlapping scaled elements enhances the illusion. Designers use this to create a sense of 3D space on a 2D surface without any literal perspective drawing.",
    color: "#ec4899"
  },
  {
    id: "m3_15",
    topic: "Scale",
    question: "What happens when you use unexpected or extreme scale? (pp.84-87)",
    answer: "Extreme scale shifts create SURPRISE, DRAMA, and VISUAL IMPACT. Making something unexpectedly huge (a giant letter filling a poster) or unexpectedly tiny (a miniature image in vast white space) challenges viewer expectations. It can create surreal effects, humor, emphasis, or conceptual meaning. Scale contrast = visual tension!",
    color: "#ec4899"
  },
  {
    id: "m3_16",
    topic: "Scale",
    question: "How does scale relate to cropping? (pp.88-89)",
    answer: "Cropping and scale work together — when you scale an image UP beyond the page edge, it becomes cropped. A tightly cropped, enlarged detail can feel more dramatic and intimate than the full image at smaller scale. Cropping implies that the image continues beyond the frame, creating tension between what's shown and what's hidden.",
    color: "#ec4899"
  },
  {
    id: "m3_17",
    topic: "Scale",
    question: "What is a scale change (or scale shift) and how is it used in layout? (pp.90-91)",
    answer: "A scale shift is a dramatic change in size between elements. In multi-page layouts, scale shifts control pacing — a full-bleed photo followed by a page of small text creates rhythm. Within a single page, mixing large and small elements creates visual contrast, hierarchy, and energy. Without scale contrast, layouts feel monotonous.",
    color: "#ec4899"
  },
  {
    id: "m3_18",
    topic: "Scale",
    question: "How does scale connect to the human body? (pp.80-81)",
    answer: "Ultimately, all design scale relates back to the HUMAN BODY — we judge size based on our own physical experience. A poster is 'large' relative to our hands; a billboard is 'large' relative to our whole body. Environmental graphics, signage, and architecture all use the human body as the fundamental reference point for scale.",
    color: "#ec4899"
  },
  {
    id: "m3_19",
    topic: "Scale",
    question: "What is scalar contrast in typography? (pp.92-93)",
    answer: "Scalar contrast = using dramatically DIFFERENT type sizes together (e.g., a 72pt headline with 9pt body text). High scalar contrast creates strong hierarchy and visual drama. Low scalar contrast (similar sizes) creates a quieter, more uniform feel. The RATIO between sizes matters more than the actual point sizes.",
    color: "#ec4899"
  },
  {
    id: "m3_20",
    topic: "Scale",
    question: "How do designers use scale in conceptual or expressive ways? (pp.94-97)",
    answer: "Scale can communicate IDEAS beyond just hierarchy: making something huge = importance, power, dominance. Making something tiny = vulnerability, insignificance, intimacy. Juxtaposing scales = irony, surprise, humor. Matching elements at identical scale = equality, repetition. Scale is a meaning-making tool, not just an organizational one!",
    color: "#ec4899"
  }
];

const mod3QuizQuestions = [
  // --- TEXTURE ---
  {
    id: "m3q1",
    question: "What is texture in graphic design? (p.68)",
    options: [
      "The color of a surface",
      "The tactile or visual surface quality of a form",
      "The shape of an element",
      "The alignment of text on a page"
    ],
    correctAnswer: 1,
    explanation: "Texture = the surface quality of a form — how it FEELS (actual) or LOOKS like it would feel (visual). Rough, smooth, bumpy, glossy — it's all texture!",
    topic: "Texture"
  },
  {
    id: "m3q2",
    question: "What is the difference between actual texture and visual texture? (pp.68-69)",
    options: [
      "Actual texture is only in photography; visual texture is in illustration",
      "Actual texture can be physically felt; visual texture is an illusion on a flat surface",
      "They are the same thing",
      "Visual texture is more expensive to produce"
    ],
    correctAnswer: 1,
    explanation: "ACTUAL texture = you can TOUCH it (embossed paper, rough canvas). VISUAL texture = LOOKS textured but the surface is flat (a photo of wood grain, a pattern of dots). In digital design, almost all texture is visual!",
    topic: "Texture"
  },
  {
    id: "m3q3",
    question: "How does a block of body text function as texture? (pp.70-71)",
    options: [
      "It doesn't — text is always read as words, never as texture",
      "Only if the text is in a foreign language",
      "Viewed from a distance, dense text becomes a gray textural field rather than readable words",
      "Only bold text creates texture"
    ],
    correctAnswer: 2,
    explanation: "Step back from a page of text and it becomes a GRAY TEXTURE! The weight, size, leading, and density of the type all affect how light or dark that textural field appears. Typography IS texture!",
    topic: "Texture"
  },
  {
    id: "m3q4",
    question: "What is a halftone? (p.72)",
    options: [
      "A font that is 50% transparent",
      "Half of a full-color image",
      "A pattern of dots of varying sizes that converts continuous-tone images for print",
      "A design that uses only two colors"
    ],
    correctAnswer: 2,
    explanation: "Halftones convert photos into DOTS — large dots = dark areas, small dots = light areas. This dot pattern IS a visible texture, especially in newspapers. It's the foundation of how photographs are printed!",
    topic: "Texture"
  },
  {
    id: "m3q5",
    question: "How does SCALE affect the perception of texture? (pp.73-75)",
    options: [
      "Scale has no effect on texture",
      "Larger scale always makes texture disappear",
      "Small marks at normal distance = smooth texture; the same marks enlarged = rougher, visible pattern",
      "Only digital textures are affected by scale"
    ],
    correctAnswer: 2,
    explanation: "Scale transforms texture! Small dots viewed from far away = smooth surface. Zoom in and those same dots become a visible, rough pattern. Scale is what turns PATTERN into TEXTURE and vice versa!",
    topic: "Texture"
  },
  {
    id: "m3q6",
    question: "What is the key difference between texture and pattern? (pp.74-76)",
    options: [
      "Texture uses color; pattern does not",
      "Pattern has a visible repeating motif; texture's elements merge into an overall surface quality",
      "They are completely unrelated concepts",
      "Patterns are 3D; textures are 2D"
    ],
    correctAnswer: 1,
    explanation: "PATTERN = you can see the individual repeating motif. TEXTURE = the elements are so small or dense they merge into a surface quality. The difference? SCALE! Zoom out enough and pattern becomes texture!",
    topic: "Texture"
  },
  {
    id: "m3q7",
    question: "Which of the following is NOT a way to create visual texture in design? (pp.69-73)",
    options: [
      "Repeating small marks like dots and lines",
      "Using photographic imagery of real surfaces",
      "Making all elements the same size and spacing",
      "Crosshatching and stippling"
    ],
    correctAnswer: 2,
    explanation: "Making everything the same size and spacing creates UNIFORMITY, not texture! Texture comes from varied marks, photos of surfaces, hatching, stippling, halftones, and typographic density.",
    topic: "Texture"
  },
  {
    id: "m3q8",
    question: "How does texture create mood and meaning in design? (pp.76-79)",
    options: [
      "Texture has no emotional associations",
      "All textures convey the same mood",
      "Rough textures feel raw/industrial; smooth textures feel polished/modern; organic textures feel natural/warm",
      "Only color affects mood, not texture"
    ],
    correctAnswer: 2,
    explanation: "Texture carries EMOTION! Gritty/rough = raw, handmade, industrial. Smooth/clean = modern, corporate. Organic (wood, stone) = warm, natural. Digital/geometric = technological. Designers choose texture to match the message!",
    topic: "Texture"
  },
  {
    id: "m3q9",
    question: "True or False: When texture fills both the figure AND the ground, it can blur the boundary between object and background. (p.77)",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    explanation: "TRUE! When both figure and ground share similar texture, the boundary dissolves — like camouflage. Texture can unify figure/ground or separate them depending on contrast!",
    topic: "Texture"
  },
  {
    id: "m3q10",
    question: "How do digital tools expand the possibilities of texture? (pp.78-79)",
    options: [
      "Digital tools limit texture to only geometric patterns",
      "Digital tools can only reproduce traditional textures, not create new ones",
      "Scanning, layering, blending, algorithmic generation, and mixing photo/vector textures",
      "Digital design cannot use texture at all"
    ],
    correctAnswer: 2,
    explanation: "Digital tools EXPLODE the possibilities — scan real textures, layer them with transparency, generate them algorithmically, use them as masks, mix photo + vector... virtually unlimited compared to traditional media!",
    topic: "Texture"
  },
  // --- SCALE ---
  {
    id: "m3q11",
    question: "Why is scale described as 'relational'? (pp.80-81)",
    options: [
      "Because it only works with relatives in a design",
      "Because size is always judged RELATIVE to other elements, the page, or the human body",
      "Because it relates to the cost of printing",
      "Because scale only applies to typography"
    ],
    correctAnswer: 1,
    explanation: "Nothing is inherently 'big' or 'small' — it depends on CONTEXT! A 2-inch circle is big on a business card but tiny on a billboard. Scale is always about RELATIONSHIPS!",
    topic: "Scale"
  },
  {
    id: "m3q12",
    question: "How does scale create visual hierarchy? (pp.82-85)",
    options: [
      "Smaller elements attract attention first",
      "All elements must be the same size for hierarchy to work",
      "Larger elements attract attention first and signal importance; the eye moves to progressively smaller elements",
      "Scale doesn't affect hierarchy — only color does"
    ],
    correctAnswer: 2,
    explanation: "BIG = look here FIRST! The eye is drawn to the largest element, then moves to smaller ones. This is why headlines are big and body text is small — scale IS hierarchy!",
    topic: "Scale"
  },
  {
    id: "m3q13",
    question: "What is the difference between scale and proportion? (pp.82-83)",
    options: [
      "They mean the same thing",
      "Scale = overall size relative to something else; proportion = internal relationships within an object",
      "Proportion is for large objects; scale is for small objects",
      "Scale is for print; proportion is for digital"
    ],
    correctAnswer: 1,
    explanation: "SCALE = how big/small relative to OTHER things. PROPORTION = the internal ratios WITHIN an object (width-to-height). You can change scale without changing proportion (scaling up uniformly) or vice versa (stretching)!",
    topic: "Scale"
  },
  {
    id: "m3q14",
    question: "How does scale create the illusion of depth on a flat surface? (pp.86-89)",
    options: [
      "It doesn't — depth requires 3D software",
      "By making all elements the same size",
      "Larger elements appear closer (foreground), smaller elements appear farther away (background)",
      "Only by using shadows"
    ],
    correctAnswer: 2,
    explanation: "LARGER = closer, SMALLER = farther away — this mimics how we see the real world! Overlapping scaled elements enhances the illusion. It's atmospheric perspective on a flat page!",
    topic: "Scale"
  },
  {
    id: "m3q15",
    question: "What effect does extreme or unexpected scale create? (pp.84-87)",
    options: [
      "It makes the design look like an accident",
      "Surprise, drama, visual impact, and surreal effects",
      "It makes the design harder to print",
      "It has no effect on the viewer"
    ],
    correctAnswer: 1,
    explanation: "Extreme scale = SURPRISE and DRAMA! A giant letter filling a poster or a tiny image in vast white space challenges expectations and creates visual tension, humor, or conceptual meaning!",
    topic: "Scale"
  },
  {
    id: "m3q16",
    question: "How do scale and cropping work together? (pp.88-89)",
    options: [
      "They are unrelated",
      "Cropping only works at small scale",
      "Scaling an image up beyond the page edge crops it — a tightly cropped detail can feel more dramatic than the full image",
      "Cropping eliminates the need for scale"
    ],
    correctAnswer: 2,
    explanation: "Scale UP past the edge = CROP! A tightly cropped, enlarged detail creates drama and intimacy. Cropping implies the image continues beyond the frame — tension between shown and hidden!",
    topic: "Scale"
  },
  {
    id: "m3q17",
    question: "What is a scale shift and why does it matter in layout? (pp.90-91)",
    options: [
      "A gradual, barely noticeable size change",
      "Using the same scale for every element",
      "A dramatic change in size between elements that controls pacing, creates contrast, and adds energy",
      "Only relevant in web design"
    ],
    correctAnswer: 2,
    explanation: "Scale shifts = DRAMATIC size changes! In multi-page layouts, they control PACING (full-bleed photo → small text = rhythm). On a single page, they create contrast and energy. Without scale shifts, layouts feel flat and monotonous!",
    topic: "Scale"
  },
  {
    id: "m3q18",
    question: "How does scale ultimately relate to the human body? (pp.80-81)",
    options: [
      "It doesn't — scale is purely mathematical",
      "All design scale relates back to the human body as the fundamental reference point",
      "Only architecture uses the body as a scale reference",
      "The human body is irrelevant to graphic design scale"
    ],
    correctAnswer: 1,
    explanation: "We judge ALL scale based on our own bodies! A poster is 'big' relative to our hands; a billboard is 'big' relative to our whole body. The human body is the ultimate reference for scale in design!",
    topic: "Scale"
  },
  {
    id: "m3q19",
    question: "What is scalar contrast in typography? (pp.92-93)",
    options: [
      "Using the same type size throughout a document",
      "Using dramatically different type sizes together to create hierarchy and visual drama",
      "Only using fonts above 72pt",
      "The contrast between serif and sans-serif fonts"
    ],
    correctAnswer: 1,
    explanation: "Scalar contrast = dramatically DIFFERENT type sizes (72pt headline + 9pt body). HIGH contrast = strong hierarchy and drama. LOW contrast = quieter, more uniform. The RATIO between sizes matters more than actual point sizes!",
    topic: "Scale"
  },
  {
    id: "m3q20",
    question: "How can scale communicate conceptual meaning beyond hierarchy? (pp.94-97)",
    options: [
      "It can't — scale only creates hierarchy",
      "Making something huge = importance/power; tiny = vulnerability/intimacy; juxtaposing scales = irony/surprise",
      "Scale only has visual effects, never conceptual ones",
      "Conceptual meaning requires words, not scale"
    ],
    correctAnswer: 1,
    explanation: "Scale = MEANING-MAKING! Huge = power, dominance. Tiny = vulnerability, intimacy. Juxtaposed scales = irony, surprise, humor. Same scale = equality. Scale communicates IDEAS, not just visual order!",
    topic: "Scale"
  },
  // --- CROSS-TOPIC ---
  {
    id: "m3q21",
    question: "What concept connects texture and pattern? (pp.74-76)",
    options: [
      "Color theory",
      "Typography rules",
      "Scale — zoom out enough and pattern becomes texture; zoom in and texture reveals individual pattern elements",
      "They are completely unrelated concepts"
    ],
    correctAnswer: 2,
    explanation: "SCALE is the bridge! Pattern = visible repeating motif. Texture = elements merged into a surface quality. Zoom OUT on a pattern → texture. Zoom IN on a texture → pattern. Scale transforms one into the other!",
    topic: "Texture & Scale"
  },
  {
    id: "m3q22",
    question: "A designer creates a poster with a massive 300pt letter 'A' filling the entire page, with small 8pt text at the bottom. Which concepts are at work?",
    options: [
      "Only color theory",
      "Scale contrast, hierarchy, cropping, and scalar contrast in typography",
      "Only texture",
      "Only proportion"
    ],
    correctAnswer: 1,
    explanation: "This uses SCALE CONTRAST (massive vs tiny), HIERARCHY (eye goes to big 'A' first), CROPPING (letter likely extends past edges), and SCALAR CONTRAST in typography (300pt vs 8pt). Scale is doing ALL the work here!",
    topic: "Texture & Scale"
  },
  {
    id: "m3q23",
    question: "True or False: In digital design, ALL texture is visual (simulated) because screens are smooth surfaces.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    explanation: "TRUE! Screens are flat and smooth — you can't feel texture on them. All texture in digital/screen design is VISUAL (it LOOKS textured but IS flat). Actual/tactile texture only exists in physical media like print!",
    topic: "Texture"
  },
  {
    id: "m3q24",
    question: "Which of the following BEST describes why a headline set at 72pt and body text at 9pt work together? (pp.92-93)",
    options: [
      "They are the same font",
      "The high scalar contrast creates clear hierarchy — the eye reads the large headline first, then the small body text",
      "Smaller text is easier to read",
      "Larger text costs less to print"
    ],
    correctAnswer: 1,
    explanation: "HIGH SCALAR CONTRAST (72pt vs 9pt = 8:1 ratio) creates immediate, clear hierarchy. The eye JUMPS to the headline first, then naturally moves to the body text. The ratio between sizes drives the reading order!",
    topic: "Scale"
  },
  {
    id: "m3q25",
    question: "A designer uses a photograph of rough concrete as a background, with clean vector text on top. What principle is at work? (pp.76-79)",
    options: [
      "Scale only",
      "Textural contrast — the rough photographic texture separates from the smooth vector type",
      "Color theory only",
      "Grid systems"
    ],
    correctAnswer: 1,
    explanation: "TEXTURAL CONTRAST! The rough concrete (photographic/visual texture) plays against the smooth, clean vector type. This contrast separates figure from ground and creates visual interest through opposing surface qualities!",
    topic: "Texture"
  }
];
