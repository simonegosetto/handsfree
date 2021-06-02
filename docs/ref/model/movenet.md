---
sidebarDepth: 2
---
# 🤸‍♀️ MoveNet

<div class="row align-top">
  <div class="col-6">
    <!-- <p><img alt="A person striking various poses, with a wireframe overlaid on top of them" src="https://media0.giphy.com/media/VJ7aDV6F5id8wY2Ff0/giphy.gif" /></p> -->
    <!-- <ul>
      <li>Powered by <a href="https://www.npmjs.com/package/@mediapipe/pose">MediaPipe's Pose</a></li>
      <li>Full <a href="https://google.github.io/mediapipe/solutions/pose.html">technical documentation</a></li>
    </ul> -->
  </div>
  <div class="col-6">
    <Window title="Overview and basic demo">
      <section>
        <div>
          <HandsfreeToggle class="full-width handsfree-hide-when-started-without-movenet" text-off="Try basic MoveNet demo" text-on="Stop MoveNet Model" :opts="demoOpts" />
          <button class="handsfree-show-when-started-without-movenet handsfree-show-when-loading" disabled><Fa-Spinner spin /> Loading...</button>
          <button class="handsfree-show-when-started-without-movenet handsfree-hide-when-loading" @click="startDemo"><Fa-Video /> Try basic MoveNet demo</button>
        </div>
      </section>
    </Window>
  </div>
</div>

<!-- Code -->
<script>
export default {
  data () {
    return {
      demoOpts: {
        autostart: true,

        weboji: false,
        hands: false,
        facemesh: false,
        pose: false,
        handpose: false,
        movenet: true
      }
    }
  },

  methods: {
    /**
     * Start the page with our preset options
     */
    startDemo () {
      this.$root.handsfree.update(this.demoOpts)
    }
  }
}
</script>