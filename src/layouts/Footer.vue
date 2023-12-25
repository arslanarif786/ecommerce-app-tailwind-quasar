<template>
    <div class="flex flex-row space-x-40 h-55 justify-center pt-10 text-base">
        <div>
            <span class="pt-5"><strong>ABOUT US</strong></span>
            <div style="margin-top: 20%" class="flex flex-col">
                <span class="my-1"><RouterLink to="#">About Remix</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Company information</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Contact</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Become a partner</RouterLink></span>
            </div>
        </div>
        <div>
            <span class="pt-5"><strong>CUSTOMER SERVICE</strong></span>
            <div style="margin-top: 20%" class="flex flex-col">
                <span class="my-1"><RouterLink to="#">Terms of use</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Privacy Policy</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Right to withdraw</RouterLink></span>
            </div>
        </div>
        <div>
            <span class="pt-5"><strong>HELP WITH SHOPPING</strong></span>
            <div style="margin-top: 20%" class="flex flex-col">
                <span class="my-1"><RouterLink to="#">Payment methods</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Delivery</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Complaints</RouterLink></span>
            </div>
        </div>
        <div>
            <span class="pt-5"><strong>WHERE TO FIND US</strong></span>
            <div style="margin-top: 20%" class="flex flex-col">
                <span class="my-1"><RouterLink to="#">Facebook</RouterLink></span>
                <span class="my-1"><RouterLink to="#">Instagram</RouterLink></span>
                <span class="my-1"><RouterLink to="#">YouTube</RouterLink></span>
            </div>
        </div>
    </div>
    <div class="h-20 pt-10">
        <ul class="flex flex-row justify-center text-black">
            <li class="mx-1"><RouterLink to="#"><img
                    :src="'https://remiks.com/media/payment/ChipCard-logo.png'"
                    alt="Chip Card"
                    style="height: 32px; max-width: 140px" /></RouterLink></li>
            <li class="mx-1"><img
                    :src="'https://remiks.com/media/payment/maestro.png'"
                    alt="Maestro"
                    style="height: 32px; max-width: 49px" /></li>
            <li class="MX-1"><img
                    :src="'https://remiks.com/media/payment/master.png'"
                    alt="Master"
                    style="height: 32px; max-width: 49px" /></li>
            <li><img
                    :src="'https://remiks.com/media/payment/visa.png'"
                    alt="Visa"
                    style="height: 32px; max-width: 50px" /></li>
            <li><RouterLink to="#"><img
                    :src="'https://remiks.com/media/payment/banca_intesa.png'"
                    alt="Banca intesa"
                    style="height: 32px; max-width: 232px" /></RouterLink></li>
            <li><RouterLink to="#"><img
                    :src="'https://remiks.com/media/payment/visa-secure-black.jpg'"
                    alt="Visa protect"
                    style="height: 32px; max-width: 32px" /></RouterLink></li>
            <li><RouterLink to="#"><img
                    :src="'https://remiks.com/media/payment/mastercard_securecode.gif'"
                    alt="Mastercard securecode"
                    style="height: 32px; max-width: 60px" /></RouterLink></li>
        </ul>
    </div>
    <div class="h-16 bg-[#2c2c33] text-white flex flex-row">
        <a class="p-5" href="tel:0800 000 800"><span class="material-icons">phone </span> 0800 000 800</a>
        <span class="pt-5 pl-29 text-gray-400">Ponedeljak - Petak 08:00 - 18:00h</span>
        <span class="pt-5 text-gray-500 ml-auto mr-[45px]">Remiks© 2021 Platforma d.o.o. Sva prava zadržana.</span>
    </div>

</template>
  
  <script setup></script>
  