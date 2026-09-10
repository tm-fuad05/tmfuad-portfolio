export interface BlogItem {
  id: number;
  titleE: string;
  titleB: string;
  title?: string;
  image: string;
  descriptionBangla?: string;
  descriptionEnglish?: string;
}

export const dummyBlogs: BlogItem[] = [
  {
    id: 1,
    titleE:
      "How Does a Browser Actually Render an HTML Page Behind the Scenes?",
    titleB: "ব্রাউজার মূলত কীভাবে একটি HTML পেজ রেন্ডার করে?",
    title: "How Does a Browser Actually Render an HTML Page Behind the Scenes?",
    image: "/images/blogs/html_to_browse.png",
    descriptionBangla: `আমরা যখন আমাদের টেক্সট এডিটরে HTML ও এর সাথে CSS লিখে সেই ফাইলটাকে যেকোনো ব্রাউজারে ওপেন করি তখন মূলত নিচের ছবিতে দেখানো ৫ টা ধাপে ভিজিবল হয়।

**১) DOM:** আমরা জানি, ব্রাউজার **UI** দেখানোর জন্য একটা রেন্ডার (কোড -> UI) চালায়। যা ব্রাউজারের রেন্ডারিং ইঞ্জিন করে থাকে। ব্রাউজারের এই রেন্ডারিং ইঞ্জিন HTML ফাইলকে রিড করে এবং একটি ট্রি স্ট্রাকচার অবজেক্ট তৈরি করে। যার নাম **DOM** বা **Document Object Model**. ব্রাউজারের মূলেই রয়েছে এই **DOM**.এর ভিতরেই পুরো ওয়েব পেইজের এলিমেন্টগুলো অবজেক্ট আকারে সাজানো থাকে। ওয়েবসাইটের ভিতরের যেকোনো কিছু চেঞ্জ করা মানে মূলত এই **DOM** কেই চেঞ্জ করা। 

**২) CSSOM:** রেন্ডারিং ইঞ্জিন **HTML** কে রিড করে যেমন **DOM** তৈরি করে, ঠিক তেমনি **CSS** এর জন্য তৈরি করে **CSSOM** বা **Cascading Style Sheets Object Model.**

**৩) Render Tree:** এই **DOM** আর **CSSOM** একত্রিত হয়ে তৈরি হয় Render Tree. যা ব্রাউজারের ভিজিবল পার্টটুকু নিয়ে কাজ করে। যেমন আমরা যদি **css** এ \`display:none\` ইউজ করি তাহলে ঐ এলিমেন্টটি (যেমন \`<p>, <img>\` ইত্যাদি) **DOM** এ থাকে ঠিকই শুধু ব্রাউজারে ভিজিবল হয় না। কারণ **Render Tree** ব্রাউজারে ভিজিবল হউয়া অংশটুকু নিয়েই গঠিত

**৪) Layout:** রেন্ডারিং ট্রি তৈরি করার পর ব্রাউজার এলিমেন্ট সাইজ, মার্জিন ইত্যাদি হিসাব করে একটা **layout** তৈরি করে।

**৫) Paint:** উপরের ধাপগুলো শেষে এবার ব্রাউজার প্রতিটা এলিমেন্ট এবং **CSS** এর পিক্সেল তৈরি  করে এবং সব লেয়ারকে একত্রিত করে ওয়েব পেইজটি আমাদের সামনে ভিজিবল করে।

---

যখন আমরা এর ভিতরের কোনো কিছু পরিবর্তন করে আবার ব্রাউজারে রান করাই, তখন ব্রাউজারকে **Layout** এবং **Paint** পুরনরায় চালাতে হয়। যখন আমরা ওয়েবসাইটের কোনো কিছুর আকার-আকৃতি পরিবর্তন করি যেমন: \`width, height, font-size\` ইত্যাদি, তখন **Layout** কে পুনরায় চালাতে হয় এবং এর পরের ধাপ **Paint** কেও চালাতে হয়। **Layout** পরিবর্তন করা অনেক ব্যয়বহুল। কেননা এতে ব্রাউজারকে জ্যামিতিক হিসাব নিকাশ করে এরপর **Paint** করে পুরো চিত্রটা দেখাতে হয়। কিন্তু যদি শুধু বাহ্যিক রূপ যেমন: \`color\` বা \`background-color\`পরিবর্তন করা হয় , তখন শুধু **Paint** পুনরায় চালাতে হয়। আর এটা **Layout** এর তুলনায় অতি  দ্রুত হয়। 


## জাভাস্ক্রিপ্ট কি করে তাহলে? 

জাভাস্ক্রিপ্ট এই স্ট্যাটিক অর্থাৎ আত্না ছাড়া বডি টাকে জীবন্ত করে তোলে। তৈরি হউয়া DOM কে কাজে লাগিয়ে সরাসরি এর এলিমেন্ট গুলোকে 'document' নামক অবজেক্ট এর মাধ্যমে বাটনে ক্লিক করা, ফর্ম সাবমিট করা, স্টাইল পরিবর্তন করা, টেক্সট এডিট করা সহ সব কাজ করে থাকে।`,

    descriptionEnglish: `When we write HTML along with CSS in our text editor and open that file in any browser, the page essentially becomes visible through the 5 distinct phases outlined below:

**1) DOM:** As we know, to display the UI, the browser executes a rendering pipeline (Code -> UI), which is performed by its rendering engine. This rendering engine parses the HTML document and constructs a tree-like object structure known as the **DOM** or **Document Object Model**. At the very heart of the browser lies this DOM. All webpage elements are structured inside it as objects. Therefore, modifying anything within a website fundamentally means modifying this **DOM**.

**2) CSSOM:** Just as the rendering engine reads HTML to build the DOM, it likewise parses CSS to construct the **CSSOM** or **Cascading Style Sheets Object Model**.

**3) Render Tree:** Combining both the **DOM** and the **CSSOM** creates the **Render Tree**, which exclusively handles the visible portions of the webpage. For instance, if we use \`display:none\` in our CSS, that element (such as \`<p>, <img>\`, etc.) remains in the DOM tree, but will not be visible in the viewport. This is because the Render Tree is composed only of elements that need to be rendered on the screen.

**4) Layout:** After creating the Render Tree, the browser computes the exact visual geometry—calculating dimensions, margins, paddings, and screen coordinates—to generate the **Layout** (also known as Reflow).

**5) Paint:** Following the layout calculation, the browser converts the computed geometry into actual colored pixels on the screen (Rasterization), compositing all layers together to finally make the webpage visible before our eyes.

---

Whenever we modify something inside the page and run it again in the browser, the engine is forced to re-execute the **Layout** and **Paint** pipelines. When we alter visual geometry or sizing such as \`width, height, font-size\`, etc., the browser must re-run **Layout**, which subsequently forces a re-run of **Paint**. Triggering **Layout** is computationally expensive because the browser must recalculate geometric coordinates for elements and re-rasterize the entire scene. However, when modifying only superficial properties like \`color\` or \`background-color\`, only the **Paint** step needs to re-run—which executes significantly faster than triggering Layout.

---

## So What Does JavaScript Actually Do?

JavaScript breathes life into this otherwise static, lifeless body. Leveraging the generated DOM, it interacts directly with elements through the global \`document\` object—handling click events, form submissions, style manipulations, dynamic text changes, and interactive workflows.
`,
  },

  //   {
  //     id: 2,
  //     titleE: "Designing Scalable MongoDB Schemas for Modern Web Apps",
  //     titleB: "আধুনিক ওয়েব অ্যাপের জন্য স্কেলেবল MongoDB স্কিমা ডিজাইন",
  //     title: "Designing Scalable MongoDB Schemas for Modern Web Apps",
  //     image: "/images/fitrack/1.png",
  //   },
  //   {
  //     id: 3,
  //     titleE:
  //       "Advanced TypeScript Patterns Every Full-Stack Engineer Should Know",
  //     titleB:
  //       "প্রত্যেক ফুল-স্ট্যাক ইঞ্জিনিয়ারের জানা উচিত এমন অ্যাডভান্সড TypeScript প্যাটার্ন",
  //     title: "Advanced TypeScript Patterns Every Full-Stack Engineer Should Know",
  //     image: "/images/pastportals/1.png",
  //   },
  //   {
  //     id: 4,
  //     titleE: "Building Real-Time Multi-User Collaboration with WebSockets",
  //     titleB: "WebSockets দিয়ে রিয়েল-টাইম মাল্টি-ইউজার কোলাবোরেশন তৈরি",
  //     title: "Building Real-Time Multi-User Collaboration with WebSockets",
  //     image: "/images/devtech.png",
  //   },
  //   {
  //     id: 5,
  //     titleE: "Optimizing Web Vitals & Core Performance Metrics to 99+",
  //     titleB: "Web Vitals এবং পারফরম্যান্স স্কোর ৯৯+ এ অপ্টিমাইজ করার নিয়ম",
  //     title: "Optimizing Web Vitals & Core Performance Metrics to 99+",
  //     image: "/images/lingobingo/1.png",
  //   },
  //   {
  //     id: 6,
  //     titleE: "Microservices Architecture vs Modular Monolith in 2026",
  //     titleB: "মাইক্রোসার্ভিস বনাম মডুলার মনোলিথ আর্কিটেকচার ২০২৬",
  //     title: "Microservices Architecture vs Modular Monolith in 2026",
  //     image: "/images/visorix/1.png",
  //   },
  //   {
  //     id: 7,
  //     titleE: "Deep Dive into React 19 Server Actions and Optimistic UI",
  //     titleB: "React 19 Server Actions এবং অপটিমিস্টিক UI এর বিস্তারিত বিশ্লেষণ",
  //     title: "Deep Dive into React 19 Server Actions and Optimistic UI",
  //     image: "/images/logiclab/2.png",
  //   },
];
