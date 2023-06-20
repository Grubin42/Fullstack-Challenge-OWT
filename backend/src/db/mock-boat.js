const boats = [
    {
        id: 1,
        name: "Barbe Noire",
        description: "Barbe-Noire : Un pédalo robuste avec une coque en polyéthylène résistant, une capacité de deux passagers, des pédales réglables pour une utilisation confortable et une hélice à entraînement direct pour une propulsion efficace. ipsum",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lescorsaires.ch%2Fuploads%2FgRoVlAJq%2F767x0_2560x0%2F6b5b75892dca4776879af429336f00cc.jpg&tbnid=S1ov05roWzKkUM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygCegUIARDnAQ..i&imgrefurl=https%3A%2F%2Fwww.lescorsaires.ch%2Fles-bateaux-en-images%2Fpedalos&docid=HJYQtw0SJOQk1M&w=512&h=768&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygCegUIARDnAQ"
    },
    {
        id: 2,
        name: "Barbe-Rousse",
        description: "Barbe-Rousse : Un pédalo spacieux en aluminium avec une coque légère, une capacité de quatre passagers, des pédales ergonomiques pour une meilleure adhérence et une direction précise, et des repose-pieds réglables pour un confort optimal. ipsum",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcc%2FWaterfiets2.JPG%2F1200px-Waterfiets2.JPG&tbnid=9lpX8qNzpRumwM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygLegUIARD6AQ..i&imgrefurl=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FBateau_%25C3%25A0_p%25C3%25A9dales&docid=BwTW8fUL-SDc3M&w=1200&h=898&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygLegUIARD6AQ"
    },
    {
        id: 3,
        name: "Anne Bonny",
        description: "Anne Bonny : Un pédalo compact avec une coque en fibres de verre durable, une capacité de deux passagers, des sièges rembourrés pour un confort supplémentaire, des porte-gobelets pratiques et un système de gouvernail pour une manœuvrabilité aisée.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.northyorkshirewaterpark.co.uk%2Fwp-content%2Fuploads%2F2021%2F05%2Fpedalos1-1600x900.jpeg&tbnid=wTuuvbJ-DiLS2M&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygZegUIARCcAg..i&imgrefurl=https%3A%2F%2Fwww.northyorkshirewaterpark.co.uk%2Factivities%2Fpedalos%2F&docid=T7VqYL2NQf7YpM&w=1600&h=900&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygZegUIARCcAg"
    },
    {
        id: 4,
        name: "François l'Olonnais",
        description: "François l'Olonnais : Un pédalo de haute performance avec une coque en aluminium aérodynamique, une capacité de trois passagers, des pédales réglables avec un système de transmission à chaîne pour une propulsion efficace et des stabilisateurs intégrés pour une stabilité accrue.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.esterel-aventure.com%2Fbase%2Fuploads%2F2020%2F05%2Factivites-nautiques-location-pedalo-01.jpg&tbnid=nMmzOFELKIJXeM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygbegUIARCgAg..i&imgrefurl=https%3A%2F%2Fwww.esterel-aventure.com%2Factivite%2Flocation-de-pedalo%2F&docid=RJBQWTGi24__5M&w=1200&h=801&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygbegUIARCgAg"
    },
    {
        id: 5,
        name: "William Kidd",
        description: "William Kidd : Un pédalo polyvalent avec une coque en plastique renforcé de fibres, une capacité de quatre passagers, un design modulaire pour faciliter le transport et le stockage, ainsi qu'un compartiment de rangement étanche pour garder vos effets personnels au sec.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcompfr%2Fdbd5eh%2Fpedalo-avec-toboggan-orange-dbd5eh.jpg&tbnid=cW3YShZTdtLIpM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygeegUIARCmAg..i&imgrefurl=https%3A%2F%2Fwww.alamyimages.fr%2Fphotos-images%2Fpedalo-slide.html&docid=h58h7vWO55S1aM&w=1300&h=956&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMygeegUIARCmAg"
    },
    {
        id: 6,
        name: "Jean Lafitte",
        description: "Jean Lafitte : Un pédalo de luxe avec une coque en bois exotique, une capacité de deux passagers, des sièges rembourrés en cuir véritable, des pédales en acier inoxydable et une finition haut de gamme pour une expérience de navigation élégante.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.techni-contact.com%2Fressources%2Fimages%2Fproduits%2Fzoom%2F14519556-1.jpg&tbnid=S8p0LHEe3TKSyM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyghegUIARCtAg..i&imgrefurl=https%3A%2F%2Fwww.techni-contact.com%2Fproduits%2F6780-14519556-pedalo-5-places.html&docid=YCDo0Ceg1Xt7KM&w=463&h=335&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyghegUIARCtAg"
    },
    {
        id: 7,
        name: "Francis Drake",
        description: "Francis Drake : Un pédalo polyvalent avec une coque en polypropylène résistant aux chocs, une capacité de trois passagers, un système de pédalage fluide avec une transmission par courroie, ainsi qu'un porte-bagages arrière pour transporter des provisions ou des équipements supplémentaires.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.profilnature.com%2F13587-superlarge_default%2Fpedalo-starlac-h2o-plus.jpg&tbnid=JXHFnpVqhjjyvM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyg2egQIARBw..i&imgrefurl=https%3A%2F%2Fwww.profilnature.com%2Fpedalos%2F3570-pedalo-starlac-h2o-plus.html&docid=K8s4RKi6gkk4fM&w=1200&h=1372&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyg2egQIARBw"
    },
    {
        id: 8,
        name: "Mary Read",
        description: "Mary Read : Un pédalo familial avec une coque en plastique renforcé, une capacité de cinq passagers, des pédales réglables pour s'adapter à différents gabarits, des repose-pieds antidérapants, ainsi qu'une échelle de bain arrière pour faciliter les baignades.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gregoiresport.com%2Fwp-content%2Fuploads%2F2021%2F10%2FPedalo-Ecotoon-11.jpg&tbnid=vACRw2OeU8YcmM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyhAegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fwww.gregoiresport.com%2Ffr%2Fmarine%2Farmada-pedalo-ecotoon%2F&docid=YBVO9VzfROU32M&w=2048&h=1536&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyhAegUIARCEAQ"
    },
    {
        id: 9,
        name: "Henry Morgan",
        description: "Henry Morgan : Un pédalo de loisir avec une coque en PVC résistant, une capacité de deux passagers, des sièges inclinables pour une détente optimale, un pare-soleil amovible pour se protéger du soleil et un porte-bouteille intégré pour garder vos boissons à portée de main.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.northyorkshirewaterpark.co.uk%2Fwp-content%2Fuploads%2F2021%2F05%2Fpedalos3.jpeg&tbnid=Vi9HXUVyikTfRM&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyhDegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.northyorkshirewaterpark.co.uk%2Factivities%2Fpedalos%2F&docid=T7VqYL2NQf7YpM&w=2000&h=1331&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyhDegUIARCKAQ"
    },
    {
        id: 10,
        name: "Calico Jack Rackham",
        description: "Calico Jack : Un pédalo polyvalent et léger avec une coque en composite de fibre de verre, une capacité de trois passagers, un système de direction réactif, des pédales antidérapantes et un gouvernail réglable pour une maniabilité précise.",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bateau-electrique.com%2Fimages%2Fnews%2Fnews_20180925163118.jpg&tbnid=Q7j0hwwdZ97d_M&vet=12ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyhEegUIARCMAQ..i&imgrefurl=https%3A%2F%2Fwww.bateau-electrique.com%2Factualites%2Ffamilly-pedalo-electrique-repense-alinox-aquajet%2F&docid=FXsjFARj5erW5M&w=1200&h=719&q=image%20p%C3%A9dalo&ved=2ahUKEwi_ucTFvNH_AhVNP-wKHWm1AQ4QMyhEegUIARCMAQ"
    },
];
module.exports = boats