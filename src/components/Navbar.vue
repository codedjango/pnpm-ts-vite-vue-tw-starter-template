<template>
	<header class="flex items-center justify-end gap-2 bg-red-400">
		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
	</header>
</template>
