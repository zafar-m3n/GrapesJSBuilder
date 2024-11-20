import statisticsAImage from "@/assets/statisticsA.svg"; // Replace with the path to your image asset

export const addStatisticsA = (editor) => {
  editor.BlockManager.add("statistics-1", {
    label: `
      <div style="text-align: center; width: 100%; height: 100%;">
        <img src="${statisticsAImage}" alt="Statistics A Image" style="width: 100%; height: auto; border-radius: 8px;">
        <div style="margin-top: 10px;">Statistics A</div>
      </div>
    `,
    content: `
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    `,
    category: "Statistics",
  });
};
