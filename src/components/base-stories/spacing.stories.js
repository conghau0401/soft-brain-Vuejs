export default {
  title: 'Base/Style/Spacing',
}

export const Magin = () => ({
  components: {},
  template: `
  <div class="bg-gray-c mt-32 mb-2 p-8 h-full">
    <span class="font-bold">
      Available options:
    </span>
    <span> 1, 2, 4, 8, 16, 32</span>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white m-1">
        Margin 1: m-1
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white m-2">
        Margin 2: m-2
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white m-4">
        Margin 4: m-4
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white m-8">
        Margin 8: m-8
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white m-16">
        Margin 16: m-16
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white mx-4">
        Margin X-axis: mx-{space}
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white my-4">
        Margin Y-axis: my-{space}
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white mt-4">
        Margin Top: mt-{space}
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white mb-4">
        Margin Bottom: mb-{space}
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white ml-4">
        Margin Left: ml-{space}
      </div>
    </div>
    <div class="bg-gray-e border m-4 w-128">
      <div class="text-black p-1 bg-white mr-4">
        Margin Right: mr-{space}
      </div>
    </div>
  </div>
  `,
})

export const Padding = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    <span class="font-bold">
      Available options:
    </span>
    <span> 1, 2, 4, 8, 16, 32</span>
    <div class="m-4">
      <div class="text-black border bg-white w-128 p-1">
        Padding 1: p-1
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 p-2">
        Padding 2: p-2
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 p-4">
        Padding 4: p-4
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 p-8">
        Padding 8: p-8
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 p-16">
        Padding 16: p-16
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 px-4">
        Padding X-axis: px-{space}
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 py-4">
        Padding Y-axis: py-{space}
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 pt-4">
        Padding Top: pt-{space}
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 pb-4">
        Padding Bottom: pb-{space}
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 pl-4">
        Padding Left: pl-{space}
      </div>
    </div>
    <div class="m-4">
      <div class=" text-right text-black border bg-white w-128 pr-4">
        Padding Right: pr-{space}
      </div>
    </div>
  </div>
  </div>
  `,
})

export const Width = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    <span class="font-bold">
      Available options:
    </span>
    <span> 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, full, screen</span>
    <div class="m-4">
      <div class="text-black border bg-white w-32 p-2">
        Width 32: w-32
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-64 p-2">
        Width 64: w-64
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-128 p-2">
        Width 128: w-128
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-256 p-2">
        Width 256: w-256
      </div>
    </div>
    <div class="m-4">
      <div class="text-black border bg-white w-full p-2">
        Width full: w-full
      </div>
    </div>
  </div>
  </div>
  `,
})

export const Height = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    <span class="font-bold">
      Available options:
    </span>
    <span> 0, 1, 2, 4, 8, 16, 32, 64, 128, 256, full, screen</span>
    <div class="flex flex-row h-64 overflow-scroll">
      <div class="m-4">
        <div class="text-black border bg-white h-8 p-2">
          Height 8: h-8
        </div>
      </div>
      <div class="m-4">
        <div class="text-black border bg-white h-16 p-2">
          Height 16: h-16
        </div>
      </div>
      <div class="m-4">
        <div class="text-black border bg-white h-32 p-2">
          Height 32: h-32
        </div>
      </div>
      <div class="m-4">
        <div class="text-black border bg-white h-64 p-2">
          Height 64: h-64
        </div>
      </div>
      <div class="m-4">
        <div class="text-black border bg-white h-128 p-2">
          Height 128: h-128
        </div>
      </div>
      <div class="m-4">
        <div class="text-black border bg-white h-256 p-2">
          Height 256: h-256
        </div>
      </div>
      <div class="m-4">
        <div class="text-black border bg-white h-full p-2">
          Height full: h-full
        </div>
      </div>
    </div>
  </div>
  </div>
  `,
})
