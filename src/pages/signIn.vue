<template>
    <div class=" flex items-center justify-center">
        <div class="max-w-[1200px] h-[600px] md:h-[400px] w-full flex justify-center items-center" >
            <div class="w-[350px] h-[320px] rounded-2xl flex items-center flex-col" style="background-color: #1F1B2E; padding: 30px 20px; margin: 0 10px;">
                <h1 class="text-white text-2xl font-medium" >Sign in</h1>
                <form  class=" w-[320px]  flex flex-col gap-4" style="margin-top: 15px;">
                    <input class="border border-gray-100 rounded-lg h-10 text-white" type="text" v-model="email" placeholder="write your email" style="padding-left: 10px;">
                    <input class="border border-gray-100 rounded-lg h-10 text-white" type="text" v-model="password" placeholder="write your password" style="padding-left: 10px;">
                    <button class="bg-white h-10 rounded-lg text-md font-medium" @click="log($event)">Log in</button>
                </form>
                <button class="h-10 rounded-lg text-md font-medium text-white w-[320px]" style="background-color: #FAFAFF14; margin-top: 10px;" @click="withGoogle">With Google</button>
            </div>
        </div>
    </div>
   

    
</template>
<script setup>
    import {ref} from 'vue'
    import { useToast } from 'vue-toastification'
    import {getAuth,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
    const email = ref('')
    const password = ref('')
    const Toast = useToast()

    const log = (e)=>{
        e.preventDefault()

        createUserWithEmailAndPassword(getAuth(),email.value,password.value)
            .then((data)=>{
                Toast.success("Signed in successfully",{
                    position: "top-center",
                    timeout: 3000,
                })
                email.value = ''
                password.value = ''
            })
            .catch((err)=>{
                Toast.error("Your email or password is mistake",{
                    position:"top-center",
                    timeout:3000
                })
                email.value = ''
                password.value = ''
            })
         
        
    }

    const withGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
            const user = result.user;
            console.log('User signed in:', user);
            Toast.success("Google sign-in successful!",{
                position:"top-center",
                timeout:3000
            });
            })
            .catch((error) => {
            Toast.error(error.message,{
                position:"top-center",
                timeout:3000
            });
            });
        };


</script>