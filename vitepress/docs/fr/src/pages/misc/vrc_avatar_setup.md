<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

# Commenet ajouter le support pour le suivi des yeux sur votre avatar: {.text-[#ab5ac7]}

Pour l'instant, les meuilleures resources sont sur le [GitHub](https://github.com/benaclejames/VRCFaceTracking/wiki/Eye-Tracking-Setup) et [Discord de VRC Face Tracking](https://discord.gg/Fh4FNehzKn).

J'espère avoir une bonne vidéo disponiple par un membre de la communauté qui montre et explique le procéssus à un moment.

### Nous utilisons les paramettres suivant

`LeftEyeX`

`RightEyeX`

`EyesY`

`LeftEyeLidExpandedSqueeze`

`RightEyeLidExpandedSqueeze`

<div align="center">
    <Alerts :options="alerts.vrc_avatar_setup">
        <template v-slot:content>
            <p>
               Nous ne supportons que les parametres float, Merci d'ajuster vos animations en conséquence.
            </p>
        </template>
    </Alerts>
</div>
