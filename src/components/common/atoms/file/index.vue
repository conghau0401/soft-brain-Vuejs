<template>
  <div>
    <input
      class="hidden"
      :id="id"
      :name="id"
      type="file"
      :multiple="max > 1"
      ref="fileInput"
      @change="filesChange($event.target.files)"
    />
    <div class="upload center hover-primary">
      <label :for="id">
        <i class="fas fa-plus mr-2"></i>
        クリックするか、ファイルをドロップしてください
      </label>
    </div>
    <div class="app-flex-between flex-wrap" v-if="files.length">
      <div
        v-for="{ id, name, icon, previewUrl } in files"
        :key="id"
        class="file"
      >
        <div
          class="app-flex-between hover-primary"
          @mouseover="imgUrl = previewUrl || ''"
          @mouseleave="imgUrl = ''"
        >
          <div class="center truncate">
            <img class="w-4 h-4 mr-1" :src="icon" />
            <label class="truncate">{{ name }}</label>
          </div>
          <i class="ml-2 fas fa-times" @click="clear(id)"></i>
        </div>
        <div class="preview-wrapper" v-if="imgUrl === previewUrl">
          <div class="overflow-scroll full">
            <img class="preview-image" :src="imgUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// {{ $t('message.misc.input.file.placeholder')}}
import { randomStr } from '@utils'
import Id from '../../../../mixins/id'

const icons = {
  doc: '/assets/images/fileIconPack/doc.svg',
  docx: '/assets/images/fileIconPack/doc.svg',
  png: '/assets/images/fileIconPack/img.svg',
  jpg: '/assets/images/fileIconPack/img.svg',
  jpeg: '/assets/images/fileIconPack/img.svg',
  bmp: '/assets/images/fileIconPack/img.svg',
  gif: '/assets/images/fileIconPack/gif.svg',
  pdf: '/assets/images/fileIconPack/pdf.svg',
  ppt: '/assets/images/fileIconPack/ppt.svg',
  pptx: '/assets/images/fileIconPack/ppt.svg',
  xls: '/assets/images/fileIconPack/xls.svg',
  xlsx: '/assets/images/fileIconPack/xls.svg',
  default: '/assets/images/fileIconPack/xxx.svg',
}

function _icon(type) {
  return icons[type.split('/')[1]] || icons.default
}

function _isImage(type) {
  return 'image' === type.split('/')[0]
}

export default {
  name: 'AppFile',
  mixins: [Id('file')],
  props: {
    max: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    files: [],
    imgUrl: '',
  }),
  methods: {
    clear(id) {
      this.files = this.files.filter((el) => el.id !== id)
    },
    filesChange(fileList) {
      const files = Object.values(fileList).map((file) => {
        return {
          file,
          id: randomStr(),
          name: file.name,
          icon: _icon(file.type),
          previewUrl: _isImage(file.type) ? URL.createObjectURL(file) : null,
        }
      })
      this.files = files.concat(this.files).slice(0, this.max)
    },
  },
}
</script>
<style lang="scss" scoped>
.upload {
  @apply border;
  @apply border-dashed;
  @apply p-2;
  @apply rounded;
}

.file {
  width: 48%;
  @apply bg-gray-e;
  @apply overflow-hidden;
  @apply mt-4;
  @apply p-2;
  @apply rounded;
  @apply relative;
}

.preview-wrapper {
  @apply rounded;
  width: 30%;
  @apply bg-white;
  @apply border;
  @apply border-gray-c;
  @apply h-32;
  @apply mt-2;
  @apply p-2;
  @apply fixed;
  z-index: 10;

  .preview-image {
    @apply h-full;
    @apply w-full;
    @apply object-center;
    @apply object-cover;
  }
}
</style>
