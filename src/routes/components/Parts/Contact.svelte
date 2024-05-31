<script lang="ts">
  import { createForm } from "svelte-forms-lib";
  import { inview } from "svelte-inview";
  import * as yup from "yup";
  let id: string;
  export let enterFunc: (id: int) => void;

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      subject: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required().min(10),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      fetch('/api/mailing', {
            method: 'POST'
        });
    },
  });
</script>

<div class="flex justify-center pt-32">
  <div id="contact" class="w-full my-0 xl:w-9/12 mb-4 px-3 pt-0 mx-auto">
    <section class="mb-32 text-gray-800 w-full text-center">
      <div class="px-6 py-20 md:py-0 md:px-12 w-full">
        <div class="w-full mx-auto xl:px-32">
          <div class="grid lg:grid-cols-2 items-center">
            <div class="md:mt-12 mt-0 lg:mt-0 mb-12 lg:mb-0">
              <div
                class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)"
              >
                <div class="flex justify-center">
                  <h3 class="border-b-4 text-3xl font-bold mb-12">
                    Contact us
                  </h3>
                </div>
                <form on:submit={handleSubmit} action="?/send" method="POST">
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      name="subject"
                      on:change={handleChange}
                      on:blur={handleChange}
                      bind:value={$form.subject}
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                      id="subject"
                      placeholder="Subject"
                    />
                    <div use:inview on:enter={() => enterFunc(id)}></div>
                    {#if $errors.subject}
                      <div class="flex justify-start pt-2 pl-2">
                        <span class="text-sm text-left text-red-600">
                          {$errors.subject}
                        </span>
                      </div>
                    {/if}
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                      id="email"
                      name="email"
                      on:change={handleChange}
                      on:blur={handleChange}
                      bind:value={$form.email}
                      placeholder="Email address"
                    />
                    {#if $errors.email}
                      <div class="flex justify-start pt-2 pl-2">
                        <span class="text-sm text-left text-red-600">
                          {$errors.email}
                        </span>
                      </div>
                    {/if}
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                      id="message"
                      rows="3"
                      name="message"
                      on:change={handleChange}
                      on:blur={handleChange}
                      bind:value={$form.message}
                      placeholder="Message"
                    />
                    {#if $errors.message}
                      <div class="flex justify-start pt-2 pl-2">
                        <span class="text-sm text-left text-red-600">
                          {$errors.message}
                        </span>
                      </div>
                    {/if}
                  </div>

                  <button
                    type="submit"
                    class="w-full px-6 py-2.5 bg-violet-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <div class="map-container relative shadow-lg rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32022.351821090422!2d20.435690118294605!3d44.81335877242003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1685397501864!5m2!1ssr!2srs"
                  class="left-0 top-0 h-full w-full absolute rounded-lg"
                  frameborder="0"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<!-- Container for demo purpose -->
