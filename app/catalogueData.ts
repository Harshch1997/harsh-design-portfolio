const ids = (value: string) => value.trim().split(/\s+/);

export const driveCatalogues = {
  print: ids(`
    1u_fgzruHrTYf3_sqt-JGCojm1QHwlg8a 1YWGcY0G-1Oi2WjoMo_x41jx0nqc_6KMY 1NDqBJfvUsKZRHJjYfpgTMs4T4PJFasOf 1FXMrQCMjRgGDBNuMWqgYFYy9ZuR4Zh-T 1uUKcW7uX4Pl_WCiR5hzkkdhbk-hDhO4y
    1Jr5Wmrg-JN-Z8igokQ3y5fQdcWLeeN5t 1tjUEC7w6BjAzktSBxfGRaD1Mp2UrWyKh 17m_8Xp563hOaAcFSslnl-HDhU8_FBNs8 1dhneWBkSiyS5pL9InvUHRttc-QZHP8YB 16H9R7DqX6HjGti2PeEvcHGUwxWkuJNL8
    1PYUJsSXEXHB6cN6sBtQPaYAzCEDIaSC8 1_wQxNFImJlmOy0TVFY3vkV8t61AYUmuA 1tL_mEezZ9R7KOOYw_mw2X5idK3r9q52P 1qzuaDIzzAxLbSAVizFJcn8MxD2akn2Oh 1I2VfUC3kZ5fasqz1L-mpDZwtofNQXOZc
    1q-iASnmGXZiwuDOaafUKb6ndxc5n-Wfi 1an7ghdOSBADSF3LMKnDCSSyACoxBXWyj 1MK9aSAZkQDG8YyZ1WGZb58pQEGFkqjQJ 1CARGLlyzCRts6cxaFeUtdLgl4T3bmpWv 1Dq6VMXqKKq84sgLUVbiLn0sefbYth4Rf
    1fqKVneH-xHutmSc939RjdqxSsX6Ukgrv 1KgOSWF38zFwyY1F-wi1chqpvszCnV0s5 13UMI65VTtHXF0wHVxyRlU_F_8gY1RuYQ 156T_GLwdl3BCuIrOgERX-PlCtZCH2ybn 1CIJ3KlJBXv7e_uD7UeIzPUnivnHVpy2p
    1qFKMcERb9ImUpOmFLwhbKBLOTtQKGRkC 1yhGim4t1M--smWsk14hlw9-QpgIQmGHh 1UKMQV_x_3vtT9erM8NfYskMUqus3ZCGd 1Md4G8lvVwAZq4pWByBRFBYGsoMx6vnOj 1DFSd3bL9dDS0sFGDi1ppYFz3HhOaItKR
    1RHkHaUilsAh921oLmHEOveCg78ISAUO2 1PJl6Z1KwSKdLE9moPXYsgaiDQZTZmsRY 1YCU4U5Y3WvsmkCwcT-_y5IQPJXC2m6aV 1Y6FrOY5KE-p5MbY8N0V02AnOF51XBrmK 1gqir9Q7W4esfHsypJqBRwrw1AtRUXW8Z
    1IyMwFaaHhUqr4Y5W8_OtkQPIp8nQ6pgx 1tJKtdpxV03i6tigNteZlU-VjblFfREYG 1NXuoZB4ahx-2ap9VCwpXe2qMKxbPQT3s 1bNQwpbMjGj-4FLj4oC_m7VZYQGCz-TsD 1yv3jL4OUCIzezuyTYFL1iB4uhdh137_y
    17atu8fzxuZFKboEDkoUhfqZgzRUZJ-EZ 1Lt9Fh3GnszptJuefGQfykB11Om_Ogm7t 1k6NVRErqZT7P6k7M7gREd22k0Uvwc_X0 1lguoAxhxP8kUTMDDeqmR-NvPkZNXHPRs 1XDTxXIy0nkggW22riypRAXrs_4MCjP3H
    1GxN6aXxKvwMnvisaFwmAeZcLPrdKYy5L 1G10tRJ6IVfy6tv4-dTjzA-LpHU6xjdiD 1Nf1CWdaZshK0LfB6Th-etMZAMwYIMaJQ 1KIV4fjEeCmhfnRqSFFRG8DZfuFxEOZSd 1SPYI7FrdvGQ-n9Imd2lm4-lYBjq_zYh2
    1WVM2FL4vn5y5MlUyP3hMR8R4f-ddE9Ed 1BBMvQjPaqB4rDlMemMCjFk7yl4LI78xO 1i8XXqPm3lkZ3xJGu9q3D25bqP2CnWOBT 1Zgw7Uh_wSgMtCQKvi5pldvOXF1XhqAQK 1bfo8OxImqK2yskwN-QTV32Cgh8GFmSdT
    1YOrJEto2jj1rxvjMzhK9nQIt5fKnPK1L 1-qgnbPQG-RCIcUD_0jzxjEnYjIOf4DmM 1o7Tiana9n9FFsCy3RpgQ3ra5YYYPnyi5 1oEsa_aq9ccXvDNqaoHZUJBUa9LOtaAy8 1HBkBypcc-NwwBDJXDzkGm_a1VWl5zzZr
    1RX5zsptNfvfiv9s2afVXZaF27iXppp9T 1IzP4tAl7doNZECnMCh7eRZGOmKDxYSOS 1W3Ew1_0CO7a5IuR8By3tdoJXghGzRZoU 1RBNQv-aBoBHTqd9mgFf8-CpUUtcYHW9g 1ScXpd4XNK1AoptsOthXqopMNnLlAAqEf
    1TYjp_MASMrOPP4_84A6B2FPBnCKge09M 1y_TDJX00rEaUtBS-xvydhlZIO3YAVOWT 1oVkqPU3g52NPrnm1nfaaxj8qSGLPf2nd 1DkPfbNclLeIDhJFc5qOm9x-zs-14Di1I 1E-TlPbsjtGVqYlYs68uz1X_cG4_I5Fsg
    1mff2shEobG9ylbiT9CGwTB-O0DBq0Z0l 17aPuW16viyz7czJ7oJ7u8KEvOckxF_B1 1mNYRRgsSvD-xrntYKUepOAfLOC7TFJ8D
  `),
  packaging: ids(`
    /packaging-mockups/amla-shampoo.webp /packaging-mockups/vitamin-c-night-cream.webp /packaging-mockups/peanut-butter-range.webp
    /packaging-mockups/biteora/mint-front.webp /packaging-mockups/biteora/mint-back.webp
    /packaging-mockups/biteora/peri-peri-front.webp /packaging-mockups/biteora/peri-peri-back.webp
    /packaging-mockups/biteora/himalayan-salt-front.webp /packaging-mockups/biteora/himalayan-salt-back.webp
    /packaging-mockups/biteora/premium-phool-makhana.webp
    1wda3FbXRMkm57zZC39MHqN8nt0h48hqn 1fpwngZJK2aGhXQ_QXSNhfzjnS-cZef4R 1U4jlsLkahBx_PpIjndDiZQZTRqf7DBkJ
    1DsGWbkjgjri1z9JgwCaA3qD0CjGKrBVZ 1fxIIWYh3Ov_ZKL4qMecbVoP0jiwNXiW- 1QVXgEABBNtczKZMhYqHnVUm5znJqleQF
    1-lce2BYfiKvkE8CAbNIoSZEZCG-N7B0x 19iDm_3VIqB0FcyL4e--Cj2bJ4c2WbFWa 14tOf1pOP-5yeOLeveDQNnCCqvaH99oo_
    1S7r6RXBD7JXYIdCWpuKpDPfEV_xmfwow 1WuMIiJo7R30LFDjQuP50wdnkcAbO9p1y 1ps4xmfixMiSwa7tx9Z8IAzQufTe-XfLt
    1n5_vziITxPA8SGjIaNlZmy9sAwshGExc 1EVt3fnMMoaLHZkq5Fcoa66HxUl4C6QNE 1rOjsfMkBO3rAFzpb6qLnl1621YcWszcQ
    1vzaMugMcOHc-MQwbGFH0MG1qytdo6tuW 18vubGA5IyZmM2QRZjOZJHn2F2dWvrptA 1V8050JE5yRHFJEKEAYufgY45itjHKMGn
    1JqXvVXnY10PdP2A6NndBkOoJZU89-P82 1tx84ORXaW9iDdfUti4Wk5ZU4Lg2CMz9q 1-YftTwZAYN57pkjLwW_MvsJOyHQAOLST 1WhSDZmTT16e_y8dPwgvH2ufy_3IYxNyV
  `),
  brochures: ids(`
    1gRSWaRGwtDeMCQ8IXCXM8zAHlUNz72X4 1SB6w2ICCDOEq3hSLOw6XlfT8l5wZce3a 1wzD_N3jfN_WA-8lxHZ3tGRz7YrVQFygd
    1UAq0lkb3l_qFyk8FxSiufI_6yQIeCOc9 1vnq2psvrvctSozLBGG79YMI4Q_Z7CAAn 1Tj9d3VvMlp0BbwAjsOYTweZu9sV-cHih 1rFZMhT2XY7gPHO_IJsxk3sejuh8dr55L 1jYX2jVBUbG7PxDLicV2nQXeya1uHJmmI
    1FjAUeQVftXr2QIUVM8gyXJOVxtyLJqTB 1IKo6IXLEquue4HOFNY8wWsJbCAvwOmDv 1NkM7jFvfTuZ7zl_CiURsXzjjYSsps9zl 1QJHNbe2UAxC_F6_pgfhLzmZAdC-xRlO9 1Y2NUCgtmjo4Y6A4bPD7F--cj2naSIoNN
    13n5QoKkEcuemIRxC84YRVTGbCXySpkVM 1SxTAkfPj110NxVgQcicBjv32-3TSoe90 1kEvcegkxTAdX95QHGh17CbAvVpJtlF5- 1svGO8kP-dIOT7yXyGvy8NBYZLEp0qdow 1y4JeLIhpJfbe382T3L0ZW0bFoNZ5TW6I
  `),
  listings: ids(`
    1z38RrANrexCyHRUGxchXmA-3bh02oDCh 1T0rVlJ_Tlzx_XzA4ppFoGTXNIVa0_Gsx 1Y9Te7rTzZaPFjUbBzA9N1Nqn_oJ8qsS0 1Su-Ucm-FGQj3jlbX2M8RuKiZwZl16Xaf 1kuuLlmawFFnYsIozcChxBLODdkKSPyfU
    1K4P-ZrLqGjdMsEZIrSZGF2udWanEcJij 1lIhDMbVuQtE-Fd76R5YVEPAQ5DcUdBRF 1bcXUrPhUyrzoUEt3hjjRSUDuD6OLtUBu 13GyUu_HNPoXQ-7B0NP55tRpwtYcunELk 1GTeOppg89qDJ0H0lk8s6Eija5kRFI_gV
    1Xce8UMqxG_o-5tKpkm_Lzto8gyN6SKbe 1LxAH_rZSI3VRsrGBOSLyT9HeuwIwIKjF 1JHKteKiufcOKN0SqoJpA5_rMmbaL9qpn 158xbm5TE7hVrrV9W_yE4zX6epXnYBntC 17T-Xkx96aG4UgNcZARb8KVXIDO5xhTLd
    18vI5HDMFv8l4xMgqDtlYN6CClo3oLoOl 165PNDZ2-EcF7kSuNk2G1KXLGdJrtCjGF 1oDLYnSegaWQ0wDFSyhnjMjhBqYCn3XyZ 1paGIqrid6c6Py4kvtqIVJGQpxJtyK48O 1u5pEpeLuYwyUhD52a_wkaZaWAID33rOj
    1Md3YTL0amV6-Kvocy3akaXt-0xEp_ve8 1mv4m5m9lIU6VNtgSD28gm2h-d2Gs5Ib_ 1s8IJO2tj3tJkT4m_9cW3oMIONSu9Uygb 1pTbcn8xORvC_8lFWbYAzewuspY_HtpyO
  `),
  tshirts: ids(`
    1iRioqdFagZFVVLsc3ciYPTAT1RVup33S 1WzoWAZZ99Ml-QhNGIgM3Vv33nNVFFj_3 1piNEa3LZgRZi7MNeaj5rpvPsILHmbPrJ 1Vd96qQXieTj_5T-FWDqTyd6063bYGSIK 1jdysOHo3b9JRCA2hWHlVgx7xsoeAQkDE
    13amEms-nkxwMi_xrc1Es9Fsdrt_ocwFX 19Vm2L69jF1ZDio-G8skH13GUANQQX2b6 1wuB5YIncuUzVNSY37shgAOcaex7OL_tL 1hrLu44nk1wq-iMCjXsgqLJlEmEZSnSzz 18Ink7sXBzNZgGxpy22JYZOve4mqqPLW9
    1eI4rw3OE_ujB7YTzGuyZnJxwa74DR-Y5 1tjor13VaJ6hCul-8qs5qXlEwUBNNeON4 1Gg5doNEy9m5nTrermEwyfpaeUIDP3T7g 1iF2G06tHcTrjN1kWaRknfm4Dqspmk5XT 1MZBWjLShvMBNY-xKhkrWaNzSxHtHxwHv
    1SLzqzYHQ7R7cUITQoVXO7pyHq2uL2S7s 1Rdk4ynguepmGtRq1PHqERREOksIuusjt 1sUP90fk06r4uCVlmJsLL7nYeWyyuTL6n 1sY7qfvXD-RQq1StinYNImMmL6HTkBv2z 1-0RiGNz6Fdm2nisPCckdaYQPMkD0hYiA
    1aPTTtsc6OEkBDB-yCKiDxQuGeTudEtdn 1oHz9EYrV1g5eSW1KsA6vHPcamdqPZUfK 1chyrzIN4YKUqovIaDgyjTTDjyUaVAE0A 1tfKUaxddywbV_hJvBhIHnNp4ic-EH0Rt 17HhL54o-VbK0YmwndbeWiV_e2GvZgUTd
    1u6fie7g-m66lGO5r8isEwvLw1eYW4Okv 1zEM2hcD5hjgpNqnSpr8wVWQcONl68L-8 1Tzb8cb7LRLiAeO0p5fepHQE5Fga5FQ30 1gSzCotHCX1mvrxiqrJtFT8T2mfTLUYUZ 18MSZr7tH9jJpOLAxQkH92cVvYMkr5wtD
    1-LwsBXElr5Bqbfl6IWP7H4T-RFyISv8s 1tNIXwaWvCJjsVk4UihEMHhnXvOXQSgQ1 1IylphinWtshUJala9rE-nNsgLEGOH8Uc 1dENQdlN6mXm_pJbT7w7MQ41iiimThxH- 1JHoNbrn8nQN-k7RjNMyTchFrIKL9VHr1
    1kOwlvH_7kaBWGP4xjHl8oZnrRJ5LN6sg 1SMNsumbXNczTHEAg_goZPCCQbt1U1C45 11OXBrQjeX5qau4Uop-WGmAYJE5Cv3sgG 1bf-zTriuSmz4EYkOHpVbk__u_DZdY7bB 1GkcyWAwAwIxL8SWsqKxksqoUzSefe22O
    1hAe-GQc5IMJdQY5omD4GYb5X-n01rTXp 1a1UvQH9h9I61akeKk9ZdzshCJe9GTD4h 1BsQkh2SIQq8TQQSm5xPz0btCLawtp93q 1M5yRKl4h7yY8k0qJUCvN1z6QZ69yTgoK 1kmN5GWd--yTeMOBWz5DdaGIlwUyFgH5B
    1OX3045SihvVHKX-OpB1OJVbH8GMdy-0P 1-hdARvQhKLQC70tYc3qPam8Is0OwGjnO 1h8eyDhPsYw_T0Ok2Hg-1XdC0C2NIKxlt 1Gjg9oDwNWw5lN2A6_fNkKJlR9-IfJm5I 1_oYYISW50qXnRfVvF5J4dVt_uxM8hTFJ
  `),
  identity: ids(`
    1LaA6K2ZYvZoOqx76HZ9laVbi3DOvhCT- 1kH88iwVsCU3N3Bd6Rzn_Vg_yUVhQPGXX 1VFurTirUhOMZa-cmdkT9rxAngk0OKNAX 1PnvVhZooxenPWS5s9CI65Ko4pTD4uas0 1zKB7MVcPjEv2BRQBuuj82EzmA8hQ9rW_
    183-_jfyl6XoZ8Q4W2E7vnX1Sbs6UYUCQ 1itzMb6ehz2BKVXHG5jETXM1BH36KLJ4a 16zScy7ZW499iazdBL5y6LFHCwaWrEMaf 19I3wWjBGZKCgAf2jN2hXmqNn3bGxf9Xp 1eraFwRNJP36n_3UizFHMsJzxMttZnYw-
    1ZlSWmhg6PUz2W6WYl46hluXvwDungaFS 1FifBdear3Ec7RK1tvtP1x-oWwKdlddAY 1Stft37-fWVQt6GbJ-o0qAKfjto6S_n47 1KPhau29qPaIzSCpTQG70qmLItuE7QRWw 13eZNqH7Ys7NqiPPlByIQiWy61MJosg1e
    1uAmccJLlPYsBQKez8fq-zVNekgNpWkY_ 1wCBJBf7CbB0sFbhoffAPt_i4x0GMNywQ 1MACH-HRwMMImW6PkCqXENmhwWY6svWS0 1sdO5lEam7cLhqiutEBnaGUzUKrPCUboD 1WgILDzHeW6MPaAVKEUDXoXkYeken9j4u
  `),
  outdoor: ids(`
    1TD8NmAET4K8DzpV1COhxvd0imzXDz4Kg 1xLqQu228t2pqalC3DxLEMV3T-bH9KHl1 1yDSK0bhJXNkdeYrO1rq3AgnvC35P_kzR 1gyYvJt_rp2inwKxfv_EdL8j5mkLpPuwJ 16CPkSzUCXAIXDgxHiFuf0TLobrcGaxkm
    1Rmc4j2CBvQjJ9uFJFQ1jGpWuNMPxHP7z 1Q6QrP6oc1BLiJwH9GJINmGwVScSynnKO 1nT6YY4xmcqdlDCEn9XoFP8nZE89bn_7a 1TXvZjp2BKwGUylc_vjLdODV0qGwk9TgX 1CBIve7DxwDUE75pO2qN28mr_l_YFMBsP
    155LwkJcwIeZ8LHNOMoN8Xv3hGNNLKkmt
  `),
};

export const instagramCatalogues = [
  {
    brand: "Uncover Wellness",
    accent: "#c99568",
    codes: ids("Dbaur0LR4bc DbVsgzxRCvx DbTG2y5R2W0 DbSv6VsRlln DbIdBpaR5RS"),
  },
  {
    brand: "Uncover Transform",
    accent: "#d7ff35",
    codes: ids("DbS5imduTVc DbFhqF8R-q8 DbAviAruGmt Da5ifsaNZGY Da29YnbOrFy Dazfdt0B0Da DaxoZUqSWN5 DaxEENAPEYz DavBnzoQ-FR DauZ792htCU"),
  },
  {
    brand: "Uncover Hair",
    accent: "#ff785a",
    codes: ids("DbSwbobKwYH DbFhqF8R-q8 DbAvS4vqTJG Da5Y4V-qcxo Da28jrcqKB7 DazfIscRqz8 DaxpHs3KZF4 DaxPbGsKH07 DavAblTKZKt"),
  },
  {
    brand: "Chai Calling",
    accent: "#ffb54a",
    codes: ids("DNqi6ixv2Yq DNqOnX7Txn8 DbYZlfAz3zW DbTYViEToDy DbQxquMz86u DbH7--SxCN8 DbC3VQexkhq"),
  },
  {
    brand: "Casa Sonal Singh",
    accent: "#e5bd8c",
    codes: ids("DZeiNS8hLYG DbfmSU3Tpku DbSXDNXBoGe DbLQHS4ptZ_"),
  },
  {
    brand: "Yuomo Men",
    accent: "#7ec8ff",
    codes: ids("DZfLzFRTNcj DXmfkohk4W- DXhcZ-Ik4tX DXZyBfSk8Vg DXhJ9rjkxat DXMWj1vk7Al DYplqTFT6YE DXWvcStE5o0 DXZM7MNhO54 DYmtt2qTYCP DYkbDvkzlN7 DWtfpF1k-Yc"),
  },
];

export const instagramPostCatalogues = [
  {
    brand: "Uncover Wellness",
    accent: "#c99568",
    posts: [
      { code: "DanR987tuSr", slides: 1 },
      { code: "DanRu98xlg7", slides: 1 },
      { code: "DanRShmxxP9", slides: 1 },
      { code: "DbgCA2iHz4G", slides: 6 },
      { code: "DbdiqPfDV5o", slides: 5 },
      { code: "DbNhGqgxaYr", slides: 1 },
      { code: "DbIext6n2hG", slides: 8 },
    ],
  },
  {
    brand: "Uncover Transform",
    accent: "#d7ff35",
    posts: [
      { code: "DaxgZshlMX4", slides: 5 },
      { code: "Dau1RJrMjlc", slides: 1 },
    ],
  },
  {
    brand: "Uncover Hair",
    accent: "#ff785a",
    posts: [
      { code: "Da0RIkdGJcg", slides: 7 },
      { code: "Daxf7j6GJEk", slides: 6 },
      { code: "Dau0iSCHNcV", slides: 7 },
    ],
  },
  {
    brand: "My Elyara",
    accent: "#f26b3a",
    posts: [
      { code: "DbXoiucvcwC", slides: 1, image: "/posts/DbXoiucvcwC.jpg" },
      { code: "DZxGYtgPxVJ", slides: 1, image: "/posts/DZxGYtgPxVJ.jpg" },
    ],
  },
  {
    brand: "Go Sharpener",
    accent: "#d6a8ff",
    posts: [
      { code: "DJJWX5Jzthy", slides: 1 },
      { code: "DJHCnSkobN1", slides: 1 },
      { code: "DJHB4CvzWW1", slides: 1 },
      { code: "DbVclldk0pQ", slides: 6 },
      { code: "DbVAI-vE3iD", slides: 6 },
      { code: "DbP9KS9E20r", slides: 11 },
      { code: "DbPY4RKzjev", slides: 1 },
    ],
  },
  {
    brand: "Chai Calling",
    accent: "#ffb54a",
    posts: [
      { code: "DMIuBrBTyVu", slides: 1 },
      { code: "DbVTdgMTKfr", slides: 1 },
      { code: "DbLopjUEy2a", slides: 5 },
      { code: "DbGUOscTWz6", slides: 1 },
      { code: "Da-hLXZzef-", slides: 1 },
    ],
  },
  {
    brand: "Casa Sonal Singh",
    accent: "#e5bd8c",
    posts: [
      { code: "DKEJoPxozqd", slides: 12 },
      { code: "DNKjCiDyjeh", slides: 5 },
      { code: "DbijrizpLPS", slides: 1 },
      { code: "DbYLCXPp1xI", slides: 1 },
      { code: "DbNuIXOpwkP", slides: 1 },
      { code: "DbNs-9IJEKE", slides: 1 },
      { code: "DbGbLYTJiNP", slides: 1 },
      { code: "DbA9c53CSu9", slides: 4 },
    ],
  },
];

type YouTubeCatalogue = {
  channel: string;
  handle: string;
  ids: string[];
  titles?: string[];
};

export const youtubeCatalogues: YouTubeCatalogue[] = [
  {
    channel: "Uncover Wellness",
    handle: "UncoverWellness",
    ids: ids("XbcuakaDH4Q RTbvq99VrNE 5wxjDe2MKIQ oYfgVa8qGHM aRaZLrl-lqE G58TVu-alNQ CCSFKfUTvnw NuTcEyjTDnM uo-5Wowt_eI jUBbxOQrAX8"),
    titles: [
      "Aging Skin: Beyond Wrinkles · Under The Skin",
      "Under The Skin · Ep. 1 — Skin Cancer in India",
      "The Confidence After Laser Hair Removal",
      "The UNCOVER Experience · Golf Course Road",
      "Instant Skin Score & Detailed Skin Analysis",
      "UNCOVER Clinics · Body Treatments",
      "UNCOVER Clinics · Plasma Hair Restoration",
      "Advanced Skin Treatments at UNCOVER Clinics",
      "Laser Hair Reduction at UNCOVER Clinics",
      "UNCOVER Clinic Grand Launch",
    ],
  },
  {
    channel: "My Elyara",
    handle: "myelyara",
    ids: ids("aa_H6RpJcVI U4xKBfhCQzs AjUfyDF-YNk"),
    titles: [
      "Hair Restoration 2026: Global Trends",
      "Hair Restoration Master Class",
      "The Filler That Wakes Up Collagen",
    ],
  },
  {
    channel: "The Original You Show",
    handle: "theoriginalyoushow",
    ids: ids("voSM-iCHeFg GPzpXyRHUb8 Vz2wqRwpZGk CA2nl0PrL_8 hoVh-oKvOiQ pNFfK-W7nXE"),
    titles: [
      "Building, Branding & Big Exits",
      "Khana, Khazana & Keeping It Timeless",
      "Love, Logistics & a Little SPF",
      "Punchlines, Pressure & the Power of Being Real",
      "Govinda Genes, Glow-Ups & Growing Up in Bollywood",
      "Insecurities, Injectables & Influence",
    ],
  },
  {
    channel: "GoSharpener",
    handle: "gosharpener",
    ids: ids("8WX58L1BIQk U91-xIy11aE axooKW0kP_Q"),
  },
];

export const youtubeShorts = [
  { id: "kFXrISf-NmQ", title: "Exosome Therapy in Regenerative Dermatology" },
  { id: "Wcrk4bf5sRQ", title: "Do Not Use Minoxidil" },
  { id: "yFr3iwTuqXQ", title: "Summer Tips by Dermatologists" },
  { id: "H31u1blmd-k", title: "When Hormones Take Over Your Skin" },
  { id: "-Tx5nmsNOqo", title: "A Different Kind of Valentine’s Gift" },
  { id: "gpRDbBV_oP0", title: "India’s First Non-invasive Eye Regen Treatment" },
  { id: "XQymi56XlqA", title: "Acne and Acne Scars Are a Real Problem" },
  { id: "-pMVTmeQsNE", title: "Laser Hair Reduction Is Not Permanent" },
  { id: "UWFh0KiHzI0", title: "You Are Not Alone" },
  { id: "iz2OTRxhY0M", title: "This Is What I Call an Aesthetic Clinic" },
  { id: "7jBu0TVgm1c", title: "Bacne Is a Thing — Here’s How You Fix It" },
  { id: "0z27-CPTUjI", title: "2026 Is the Year I Glow Up" },
  { id: "BC-CaCuUoYk", title: "The Magical Expectations from Dermatologists" },
  { id: "I9nrNPnek5A", title: "Laser Hair Reduction Is Not for Everyone" },
  { id: "6dQRtTgDgaY", title: "The Perfect Valentine’s Gift" },
  { id: "ZYoKBkrI79o", title: "What Happens After Your First Mounjaro Shot?" },
  { id: "cbexIIGLMGk", title: "Mayyur Girotra · Laser Toning & Sunburn Treatment" },
  { id: "RHGjY_pZ-y4", title: "Acne Treatment at UNCOVER Clinics" },
  { id: "yqnlxg3_Kqk", title: "Advanced Microneedling with Dermapen 4" },
  { id: "nWyCTNhHzDc", title: "The Glow Peel · UNCOVER Testimonial" },
  { id: "m1mTL0KE3QA", title: "OxyBright Facial & Laser Hair Reduction" },
  { id: "Jmfz2a4Kqc0", title: "Laser Hair Removal at UNCOVER Clinics" },
  { id: "Qw_1fVIMGgE", title: "Laser Hair Removal at Home by UNCOVER" },
  { id: "kaxU6kEI1Dw", title: "UNCOVER Laser, Skin & Hair Clinic · Coming Soon" },
  { id: "uoaikN7Dr7M", title: "Met Gala · Skin & Hair Treatments" },
  { id: "w7NG83-UiX4", title: "Uncover the Original You · Tailored Treatments" },
];
