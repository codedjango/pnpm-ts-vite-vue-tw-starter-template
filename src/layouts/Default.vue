<script setup>
import Footer from '@/components/Footer.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import Navbar from '@/components/Navbar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
</script>

<template>
	<div class="mx-auto flex min-h-svh max-w-[calc(100%-16rem)] flex-col">
		<Navbar />
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
		<Footer />
	</div>
</template>

<style scoped></style>
