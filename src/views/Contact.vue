<script setup>
</script>

<template>
      <div class="container mt-5">
        <h2 class="text-center mb-4">📬 Contact Us</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Your Message</label>
            <textarea
              v-model="message"
              class="form-control"
              id="message"
              rows="4"
              placeholder="Type your message"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Send Message
          </button>
        </form>

        <div
          v-if="submitted"
          class="alert alert-success mt-4"
          role="alert"
        ></div>
      </div>
</template>

<style scoped>
</style>