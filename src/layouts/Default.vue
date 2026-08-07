<script setup>
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
</script>

<template>
	<div class="mx-auto flex min-h-svh max-w-[calc(100svw-16rem)] flex-col">
		<header class="flex items-center justify-end gap-2 bg-red-400">
			<router-link :to="{ name: 'home' }">Home</router-link>
			<router-link :to="{ name: 'about' }">About</router-link>
		</header>
		<main class="flex flex-1 flex-col md:flex-row">
			<LeftSidebar />
			<div class="order-2 flex flex-1 flex-col md:order-0 md:flex-row">
				<div class="flex-1 bg-slate-400">
					<h1>Page Content</h1>
					<router-view />
				</div>
			</div>
			<RightSidebar />
		</main>
		<footer class="bg-green-400">Social links</footer>
	</div>
</template>

<style scoped></style>
