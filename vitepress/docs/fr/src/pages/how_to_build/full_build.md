<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import CheckBoxList from '../../vue/CheckBoxList.vue'
import ImageCard from '../../vue/images/ImageComponent.vue'
import { RequiredHardware } from '../../static/req_hardware'
import { image_settings } from '../../static/image_settings'
import { alerts } from '../../static/alerts'
</script>

# Guide d'assemblage {.text-[#ab5ac7]}

## Cette page est un guide d'assemblage étape par étape 

## Étape 1: Soyez bien sûr d'avoir lu les [choses à savoir avant de commencer](../getting_started/things_to_know)

Cette page vous donnera une vue d'ensemble sur l'état d'avencement du projet et quoi en attendre.

## Étape 2: commendez les pièces listés dans la [Liste des composants](../how_to_build/parts_list)

Merci de bien vouloir relever que le matériel utilisé dans ce projet peut être sujet à changements, même si après un peu de développement on dirait bien que nous allons rester avec le même matériel

## Étape 3: Attendre que tout arrives

Les longs délais d'envoi depuis la chine sont super  *m a r r a n t*! 
attendez vous à des temps d'attente allant de 2 semaines à 2 mois pour que toutes les choses arrives.

## Étape 4: Regroupez tout votre matos

Soyez sûr d'avoir au moins les composants suivant:

<CheckBoxList :options="{...RequiredHardware}" />

<ImageCard :options="image_settings.image_one" />

## Étape 5: Installer des antennes externes ou un bouclier pour l'antenne des ESPs

certaines cartes ESP-CAM ont des soucis quand il en viens de l'intégrité du signal, il y à deux choses qui peuves être faites afin d'aider à résoudre ou regler ces problèmes.

La première option des d'installer des antennes externes.

C'est la meuilleure solution pour avoir un résultat final impécable. si vous avez des trackers Vive ou Tundra, ceci est une étape **REQUISE**. Les interférences venant des trackers vont rendre le flux vidéo de votre ESP inutilisable. Un sac anti-statique n'aidera pas dans ce cas.Malhereusement, retirer les antènes n'est pas si simple, vous aurez à soit, retirer ou bouger une résistance qui fait la jonction entre 2 pads de soudure. l'image ci-dessous vous montres l'orientation de ces pads qui permettent de décider des 2 modes d'opération. Si vous ne reliez pas toutes les connections et avez les 2 modes activés en même temps. la résistence de 0Ohm n'a pas besoin d'être sur votre carte, vous pouvez simplement relier les 2pads.

<ImageCard :options="image_settings.external_antenna" />

vous trouverez ci-dessous un exemple de connection des 2pads et une antène attaché.

<ImageCard :options="image_settings.external_antenna_resistors" />

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/r4PsuWTFRBg" title="How to add an external antenna to ESP32-CAM board" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Cette seconde option est de recouvrir l'antenne de l'ESP avec un sachet antistatique. cela peut remédier à des problèmes, ou même les règler dans certains cas. Mais surtout, c'est totalement gratuit! Cependant, il est important de tenir compte que cette methode fonctionnes moins bien que d'avoir une antenne externe, et dans certains cas ne règleront pas vos problèmes, par exmeple si vous avez des Vive trackers.

<div align="center">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/wS4PS3Mw250" title="Covering an ESP32-CAM's antenna with anti-static bag" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Étape 6: Attacher les caméras aux ESPS

Regardez votre ESP et localisez le connecteur à cable plat entouré ci-dessous.

<ImageCard :options="image_settings.camera_socket" />

Relevez la pièce grise qui va vous permetre de connecter la caméra. Ne pas forcer sur la pièce ni inserrer un objet pointu, vos ongles devrait suffir.

<ImageCard :options="image_settings.camera_socket_clip" />

Maintenant inserez le cable de la caméra, veuillez faire attention que les pins font face à votre ESP, vous devriez uniquement voir la partie noire du cable.

<ImageCard :options="image_settings.camera_cable" />

Une fois que le cable est inserré, appuyez sur la pièce grise afin de l'abaisser.
Il y à peu de forces à mettre mais soyez précotioneux. Verifiez que le connecteur noir ne sortes pas du connecteur.

<ImageCard :options="image_settings.camera_clip_close" />

## Étape 7: branchez votre ESP au programeur afin de la flasher

Pourquoi téléverser le programme avant d'avoir finis d'asembler? C'est simple, pour savoir si tout fonctionnes avant de passer du temps à tout souder.

Glissez votre ESP dans le programmeur, notez que le port micro USB est à l'opposé de votre caméra.

<ImageCard :options="image_settings._7_12_one"/>

## Étape 8: Configurez Visual Studio Code et préparez vous à téléverser le firmware

Regardez le guide sur comment [installer Visual Studio Code](https://redhawk989.github.io/EyeTrackVR/setting-up-firmware-enviroment/)

une fois que VS Code est installé et configuré, allez à l'étape suivante.

## Étape 9: Brancher votre ESP et téléversez votre firmware

Notre guide, [construire et téléverser le firmware manuellement](https://redhawk989.github.io/EyeTrackVR/building-and-flashing-firmware-manually/) contient les étapes requises afin de réaliser cette étape.
Une fois flashé, verifiez que vous optenez un flux vidéo à l'aide de votre navigateur, en suite débranchez et flashez votre autre ESP.

## Étape 10: Attacher les fils d'alimentation sur un connecteur USB-A

::: attention
alimenter votre ESP depuis le programeur ne **va pas marcher correctement**. Cela délivres une tenssion plus faible qui réduirat la luminosité des LEDs et créera des atréfacts vidéo. Cela à de fortes chances de dégrader votre suivi.
:::

Prennez 2 paires de fils, préférablement de couleur différentes, les coupper à la bonne longeur (56mm dans mon cas) et torsadez les, 2 pour 5v et 2 pour la masse.
Ici j'ai utilisé du fil d'enceintes ou ceux constitudé de cuivre sont relié au 5v et ceux constitué d'argent.
En suite dénudez les fils d'à peu près 3mm de chaque coté pour exposer les fils.

<ImageCard :options="image_settings._7_12_two"/>

## Étape 11: Coupez les fils pour les LEDs infrarouges

Pour trouver la longeure optimale, prenez un bout de ficelle et faites semblant que ce soit vos cables. Faites des marques au stylo sor votre ficelle puis vos fils aux même endroits et coupez les. Faire la même chose pour l'autre Œil.
Vous allez avoir besoin de couper 3 différents cables. 2 courts pour connecter les 2 PCBs par Œil entre eux, 2 plus longs pour l'alimentation et 2 un peu plus long pour l'alimentation des LEDS près des caméras tout en bas.

Une fois coupé, dénuder 4mm de cable.

## Étape 12: Twist the positive USB wire and positive IR LED wires together and tin them

Once twisted together add solder to keep them together. This makes the connection much easier.

<ImageCard :options="image_settings._7_12_three"/>

## Étape 13: Solder the positive wire to ESP

Lay the wire on the outside of the 5V pin and apply solder.

<ImageCard :options="image_settings._13_18_one"/>

## Étape 14: Solder the negative wire to ESP

Repeat [Étape 12](#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them) but with the negative wires.

::: info
As a user in our discord has learned, you can short the `IO12` pin with the ground pin `(GND)` without issues.
:::

In the below example I put it on the top of the pin, It will be a week-ish joint but that's where glue comes in handy.

<ImageCard :options="image_settings._13_18_two"/>

## Étape 15: Wire up the 2nd ESP

Repeat steps [12](#step-12-twist-the-positive-usb-wire-and-positive-ir-led-wires-together-and-tin-them)-[14](#step-14-solder-the-negative-wire-to-esp) with the 2nd ESP.

## Étape 16: Prepare to solder IR LED PCBs

Get your magnifying glass out, it's time to solder very smol things.

Gather 4 PCBs, 4 IR LEDs, and either 4 ~350ohm.

<ImageCard :options="image_settings._13_18_three"/>

Here are the PCB pin-out labels:

<ImageCard :options="image_settings._13_18_four"/>

LED labels:

<ImageCard :options="image_settings._13_18_five"/>

If you have different LEDs, please consult their datasheet.

Some terminology related to them:

`5V`: 5-volt power in.

`GND`: Ground or power out.

`AR`: After-Resistor this is to be used as the power in on the 2nd PCB in series as resistors are not needed on the 2nd PCB since they are on the 1st one.

`SNG`: Single resistor, use this as 5V in if you are using only **1** `~700ohm` resistor on V3 boards (not recommended).

`Negative`: This marks the negative side of the LED.

`Positive`: This marks the positive side of the LED.

## Étape 18: Solder resistors on PCB V3

You only need 1 PCB to have resistors per eye.

Tin the resistor pads. Note: in this example, I use too much solder, it should only be enough to lightly cover the pad.

<ImageCard :options="image_settings._13_18_six"/>

Next, grab a resistor and hold it on the pads.

<ImageCard :options="image_settings._13_18_seven"/>

While holding the resistor add solder to your soldering iron and apply it to the resistor.

I like to do this by having a piece of my solder stick up in the air and then put it on my iron that way.

<ImageCard :options="image_settings._13_18_eight"/>

Flip the PCB and solder the other end.

<ImageCard :options="image_settings._13_18_nine"/>

Now repeat for the other one.

<ImageCard :options="image_settings._13_18_ten"/>

## Solder LEDs on PCB V3

Tin the LED pads.

<ImageCard :options="image_settings.end_one"/>

Orientate the LED and hold it in place.

<ImageCard :options="image_settings.end_two"/>

Solder one end.

<ImageCard :options="image_settings.end_three"/>

Flip around and solder the other end.

<ImageCard :options="image_settings.end_four"/>

## Wire up the PCBs V3

::: warning
Pay attention to the direction of the LEDs on the PCBs.
:::

If the green dot is facing inwards like in the picture below:

<ImageCard :options="image_settings.end_five"/>

Use the following diagram:

<ImageCard :options="image_settings.end_six"/>

If the green dot is facing outward like the picture below:

<ImageCard :options="image_settings.end_seven"/>

Use the following diagram:

<ImageCard :options="image_settings.end_eight"/>

## Étape 19: 3D print mounts

Head to the 3D printed parts section of the parts list [here.](/how_to_build/parts_list#other-parts)

Find which parts are for your headset and print them.
Some may work better or worse, it is recommended to test all of them if there are multiple, print one of each kind.
If none work, try making an edit yourself if you have the skills. If you have made a mount make sure to ping me, `Prohurtz#0001`, so I can add them to the list.

Having trouble getting them to fit? Try resizing the mounts up, or down a little to ensure a good fit.

There are 2 different types of mounts, how to secure the camera to each type will be documented below.

### Type 1

<ImageCard :options="image_settings.end_nine"/>

This uses a method of sliding in the camera. Generally, this is the recommended mounting method as it generally requires no glue.

Place the camera into the mount

<ImageCard :options="image_settings.end_ten"/>

Slowly apply pressure inwards until the camera snaps into place.

<ImageCard :options="image_settings.end_eleven"/>

<div align="center">
    <Alerts :options="alerts.end_one">
        <template v-slot:content>
            <p>
                There is a good chance of breaking the mount when putting in the camera. If this happens you may be able to save the mount depending on where the break was. A small dab of hot glue around the camera is likely all that is needed.
            </p>
        </template>
    </Alerts>
</div>

### Type 2

<ImageCard :options="image_settings.end_twelve"/>

This uses the method of gluing the camera.

Apply a bit of glue to the bottom of the camera mount.

<ImageCard :options="image_settings.end_thirteen"/>

Place the camera on the mount.

<ImageCard :options="image_settings.end_fourteen"/>

## IR LED mounting

This again differs from mount to mount.

In some cases, there are designated spots for the LEDs to go.

<ImageCard :options="image_settings.end_fifteen"/>

In others there are no specified spots, you will have to mess around to find what works best.
This image shows the optimal/near-optimal position for the LEDs. Hot glue is your friend with this.

<ImageCard :options="image_settings.end_sixteen"/>

::: tip
Use rubbing alcohol to easily remove hot glue.
:::