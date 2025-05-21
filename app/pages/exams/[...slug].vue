<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

function findBreadcrumb(navigation: ContentNavigationItem[], path: string): ContentNavigationItem[] {
  const breadcrumb: ContentNavigationItem[] = [];
  const findPath = (items: ContentNavigationItem[], targetPath: string): boolean => {
    for (const item of items) {
      breadcrumb.push(item);
      if (item.path === targetPath) {
        return true;
      }
      if (item.children && findPath(item.children, targetPath)) {
        return true;
      }
      breadcrumb.pop();
    }
    return false;
  };
  findPath(navigation, path);
  return breadcrumb;
}

function mapNavigation(items: ContentNavigationItem[]): { label: string; path: string }[] {
  return items.map(({ title, path }) => ({
    label: title || '',
    path: path || ''
  }));
}

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('exams').path(route.path).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('exams', route.path, {
    fields: ['description']
  })
)

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const blogNavigation = computed(() => navigation.value.find(item => item.path === '/exams')?.children || [])

const breadcrumb = computed(() => {
  const rawBreadcrumb = findBreadcrumb(blogNavigation, page.value.path);
  return mapNavigation(rawBreadcrumb);
});

if (page.value.image) {
  defineOgImage({ url: page.value.image })
} else {
  defineOgImageComponent('Exams', {
    headline: breadcrumb.value.map(item => item.label).join(' > ')
  }, {
    fonts: ['Geist:400', 'Geist:600']
  })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

const articleLink = computed(() => `${window?.location}`)

const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <ULink
          to="/exams"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          Exams
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <div class="flex text-xs text-muted items-center justify-center gap-2">
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead">
              -
            </span>
            <span v-if="page.minRead">
              {{ page.minRead }} MIN READ
            </span>
          </div>
          <NuxtImg
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-[300px] object-cover object-center"
          />
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <UUser
              orientation="vertical"
              color="neutral"
              variant="outline"
              class="justify-center items-center text-center"
              v-bind="page.author"
            />
          </div>
        </div>
        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <div class="flex items-center justify-end gap-2 text-sm text-muted">
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="Copy link"
              @click="copyToClipboard(articleLink, 'Article link copied to clipboard')"
            />
          </div>
          <UContentSurround :surround />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
