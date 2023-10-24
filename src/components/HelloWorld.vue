<template>
  <div id="app">
    <!-- biography -->
    <div class="tile is-6 is-parent" id="left">
      <div class="tile is-child pink post">
        <p class="title is-2 name has-text-left">Hi, I'm Samantha Siao</p>
        <p class="subtitle has-text-grey job has-text-left">Web Developer</p>
        <hr class="hr" />
        <div class="content has-text-grey description">
          <p class="has-text-left">
            Hi, I'm Samantha Siao a Software Engineer with over five years of experience, 
            and I am pursuing a Master's Degree in Information Technology at Rizal Technology University - Graduate School.
          </p>
          <p class="has-text-left">
           Previously, I worked as a Web Developer at GoETU Software Solutions and
           at Pierre and Paul Solutions Inc. as an IT Supervisor and Programmer/System Analyst.
          </p>
          <p class="has-text-left">
            I'm passionate about backend programming and I have a passion for teaching,
            sharing my knowledge, and inspiring the next generation of IT professionals.
          </p>
        </div>
        <div class="buttons">
          <a class="button is-medium is-linkedin" style="width: 50px;" href="https://www.linkedin.com/in/msshamsiao/" target="_blank">
            <i class="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a class="button is-medium is-facebook" style="width: 50px;" href="https://www.facebook.com/msshamsiao/" target="_blank">
            <i class="fab fa-facebook-f fa-lg"></i>
          </a>
          <a class="button is-medium is-behance" style="width: 50px;" href="https://www.behance.net/msshamsiao" target="_blank">
            <i class="fab fa-behance fa-lg icon-class"></i>
          </a>
          <a class="button is-medium is-github" style="width: 50px;" href="https://github.com/msshamsiao" target="_blank">
            <i class="fab fa-github fa-lg icon-class"></i>
          </a>
          <a class="button is-medium is-google-mail" style="width: 50px;">
            <b-tooltip label="programmer.samantha.siao@gmail.com" position="is-bottom">
                <i class="fab fa-google-plus-g fa-lg icon-class"></i>
            </b-tooltip> 
          </a>
          <a class="button is-medium is-viber" style="width: 50px;">
            <b-tooltip label="09518579224" position="is-bottom">
                <i class="fab fa-viber fa-lg icon-class"></i>
            </b-tooltip>
          </a>
        </div>
      </div>
    </div>
    <div class="tile is-6 is-parent" id="right"></div>

    <!-- skills -->
    <div class="tile is-6 is-parent" id="left">
      <div class="tile is-child pink host">
        <p class="title is-2 name">Skills</p>
        <hr class="hr" />
        <div class="mb-6"><br/><br/>
          <div class="columns">
            <div class="column">
              <img class="brand-class" src="../assets/skills/php.svg" style="width: 50px;" alt="linkedin"><br/>
              <p class="title is-5 name">PHP Framework</p>
              <p class="subtitle is-6">(Laravel)</p>
            </div>
            <div class="column">
              <img class="brand-class" src="../assets/skills/database.svg" style="width: 50px;" alt="linkedin"><br/>
              <p class="title is-5 name">Databases</p>
              <p class="subtitle is-6">(MySQL, MSSQL, Basic Firebase)</p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <img class="brand-class" src="../assets/skills/javascript.svg" style="width: 50px;" alt="linkedin"><br/>
              <p class="title is-5 name">JS Libraries</p>
              <p class="subtitle is-6">(jQuery, Parsley, Popper, D3, Chart, Node)</p>
            </div><br/>
            <div class="column">
              <img class="brand-class" src="../assets/skills/css.svg" style="width: 50px;" alt="linkedin"><br/>
              <p class="title is-5 name">CSS Framework</p>
              <p class="subtitle is-6">(Bootstrap, Materialize, Buefy)</p>
            </div>
          </div><br/>
          <div class="columns">
            <div class="column">
              <img class="brand-class" src="../assets/skills/vue.svg" style="width: 50px;" alt="linkedin"><br/>
              <p class="title is-5 name">JS Framework</p>
              <p class="subtitle is-6">(Basic Vue)</p>
            </div>
            <div class="column">
              <img class="brand-class" src="../assets/skills/docker.svg" style="width: 50px;" alt="linkedin"><br/>
              <p class="title is-5 name">DevOps</p>
              <p class="subtitle is-6">(Vagrant)</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="tile is-6 is-parent" id="left">
      <div class="tile is-child pink host">
        <p class="title is-2 name">Experience</p>
        <hr class="hr" />
        <div class="mb-6"><br/><br/>
          <template>
            <Timeline
              :timeline-items="timelineItems"
              :message-when-no-items="messageWhenNoItems"/>
          </template>
        </div>
      </div>
    </div>

    <!-- Campus Talk -->
    <div class="tile is-6 is-parent" id="left">
      <div class="tile is-child pink host">
        <p class="title is-2 name">Campus Talk</p>
        <hr class="hr" />
        <div class="mb-6"><br/><br/>
          <div class="columns">
            <div class="column">
              <img class="" src="../assets/campus_talk/PUP.png" style="width:200px;" alt="linkedin"><br/>
              <p class="title is-5 name">Polytechnic University of the Philippines (Main)</p>
              <p class="subtitle is-6">Guest Speaker</p>
            </div>
          </div>
          <div class="columns">
             <div class="column">
              <img class="" src="../assets/campus_talk/SLSU.gif" style="width: 200px;" alt="linkedin"><br/>
              <p class="title is-5 name">Southern Luzon State University</p>
              <p class="subtitle is-6">Resource Speaker</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="tile is-6 is-parent" id="left">
      <div class="tile is-child pink host">
        <p class="title is-2 name">Contact</p>
        <hr class="hr" />
        <div class="mb-6"><br/><br/>

          <form @submit.prevent="sendEmail">
            <b-field label="Name" 
              :label-position="labelPosition">
              <b-field label="Name" 
                :label-position="labelPosition">
                <b-input placeholder="Enter your name" maxlength="30" v-model="name" name="name" required></b-input>
              </b-field>
            </b-field>

            <b-field label="Email" 
              :label-position="labelPosition">
              <b-input type="email" placeholder="Enter your email address" maxlength="30" v-model="email" name="email" required>
              </b-input>
            </b-field>

            <b-field label="Message"
              :label-position="labelPosition">
              <b-input maxlength="200" type="textarea" name="message"  v-model="message" required></b-input>
            </b-field>
            
            <!-- <button class="button is-primary">Submit</button> -->
            <input type="submit" class="button is-primary" value="Submit">
            </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="tile is-6 is-parent" id="left">
      <div class="tile is-child pink host">
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>©</strong> 2022 <a href="#">Samantha Siao</a>.
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Timeline from 'timeline-vuejs'
  import emailjs from 'emailjs-com';
  
  export default {
    components: {
      Timeline
    },
    data() {
      return {
        name: '',
        email: '',
        message: '',

        labelPosition: 'on-border',

        messageWhenNoItems: 'There are not items',
        timelineItems: [
          {
            from: new Date(2020, 7),
            title: 'Web Developer - GoETU Software Solutions Inc.',
            description:
              ''
          },
          {
            from: new Date(2018, 5),
            title: 'IT Supervisor - Pierre and Paul Solutions Inc.',
            description:
              ''
          },
          {
            from: new Date(2018, 3),
            title: 'Programmer / System Analyst - Pierre and Paul Solutions Inc.',
            description:
              ''
          },
          {
            from: new Date(2018, 2),
            title: 'Web Developer (Partime) - Pierre and Paul Solutions Inc.',
            description:
              ''
          }
        ]
      }
    },
    methods: {
      sendEmail(e) {
        try {
          emailjs.sendForm('service_v1gzxml', 'template_k7lifi4', e.target,
          'lwXyEgiMOjkzeMHXV', {
            name: this.name,
            email: this.email,
            message: this.message
          })

        } catch(error) {
            console.log({error})
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
      },
    }
  }
</script>

<style>
  #right {
    background-image: url('../assets/new-siao.jpg');
  }
  .is-viber{
    background-color: #5b4cbe !important;
  }
  .is-behance{
    background-color: #033caf !important;
  }
  .is-google-mail{
    background-color: #D64135 !important;
  }
  .icon-class{
    color: #FFFFFF; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #FFFFFF;
  }
</style>
