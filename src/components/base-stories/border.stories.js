export default {
  title: 'Base/Style/Border',
}

export const Normal = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    <div class="text-black bg-white border p-2 w-128 m-4">
      All Border: border
    </div>
    <div class="text-black bg-white border-t p-2 w-128 m-4">
      Top Border: border-t
    </div>
    <div class="text-black bg-white border-b p-2 w-128 m-4">
      Bottom Border: border-b
    </div>
    <div class="text-black bg-white border-l p-2 w-128 m-4">
      Right Border: border-l
    </div>
    <div class="text-black bg-white border-r p-2 w-128 m-4">
      Right Border: border-r
    </div>
  </div>
  `,
})

export const Style = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    <div class="text-black bg-white border p-2 w-128 m-4 border-solid">
      Solid: border border-solid
    </div>
    <div class="text-black bg-white border-4 p-2 w-128 m-4 border-double">
      Double: border-4 border-double
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 border-dashed">
      Dashed: border border-dashed
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 border-dotted">
      Dotted: border border-dotted
    </div>
  </div>
  `,
})

export const Round = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    <div class="text-black bg-white border p-2 w-128 m-4 rounded-none">
      None: border rounded-none
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 rounded">
      Round: border rounded
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 rounded-xs">
      Extra small: border rounded-xs
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 rounded-sm">
      Small: border rounded-sm
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 rounded-md">
      Medium: border rounded-md
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 rounded-lg">
      Large: border rounded-lg
    </div>
    <div class="text-black bg-white border p-2 w-128 m-4 rounded-full">
      Full: border rounded-full
    </div>
  </div>
  `,
})
