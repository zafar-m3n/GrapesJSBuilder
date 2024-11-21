import heroImage from "@/assets/heroB.svg";

export const addHeroSectionB = (editor) => {
  editor.BlockManager.add("hero-2", {
    label: `
      <div style="text-align: center; width: 100%; height: 100%;">
        <img src="${heroImage}" alt="Hero Section B" style="width: 100%; height: auto; border-radius: 8px;">
        <div style="margin-top: 10px;">Hero Section B</div>
      </div>
    `,
    content: `
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
            <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    `,
    category: "Hero Sections",
  });
};
