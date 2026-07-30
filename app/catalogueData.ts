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
    1s2YKuTyWW2T5MMasDvxXRzLEHPPLnSPz 1dJUceebb97KSjmLOKj3SJx1ikUyc9Iq5 1uVwKxbIyH2aBuJJaNRUv1Vr_LeLoKkQm 1CMS_UZ6gdNjSTRGQbiuN_pMnEX_6fdLb 1wda3FbXRMkm57zZC39MHqN8nt0h48hqn
    1fpwngZJK2aGhXQ_QXSNhfzjnS-cZef4R 1U4jlsLkahBx_PpIjndDiZQZTRqf7DBkJ 1Ydtdh7S1S0H_S_bv9ClgwxyKlMW_fg1e 1hl-WdpQfDJG5fKzNfhE9zxnIvRipdUv7 1I4O-IKEsAbsSblmZQI3Tf_KtdUN5pkbG
    1DsGWbkjgjri1z9JgwCaA3qD0CjGKrBVZ 1fxIIWYh3Ov_ZKL4qMecbVoP0jiwNXiW- 1QVXgEABBNtczKZMhYqHnVUm5znJqleQF 17MFhVmrlLRxZ2kPoJ9cgXPrQjGIbp_GY 1Do47zF0QQ9-uESQB5dP7VLE6v0lPaSLj
    1-lce2BYfiKvkE8CAbNIoSZEZCG-N7B0x 19iDm_3VIqB0FcyL4e--Cj2bJ4c2WbFWa 1WHSL_Zs_4Zte6UFJ_gfs2T0Obbvzifal 14JxKLxSBRcT94P5wJtka9QBBIVYBm18D 14tOf1pOP-5yeOLeveDQNnCCqvaH99oo_
    1S7r6RXBD7JXYIdCWpuKpDPfEV_xmfwow 1cKCcgri7l7adFnDEq-NxC7ugtU72t9qn 18JRr91gm75M-M4jxF7FsQYdp7t5SFfIM 1WuMIiJo7R30LFDjQuP50wdnkcAbO9p1y 1ps4xmfixMiSwa7tx9Z8IAzQufTe-XfLt
    178CoovelgqjLEWdBoPMGmzVKXTS-Ni-y 1E-xH6Xt-fkPdF2lFy0RvFA0Xb4XKgt8T 146sHvGdfENBEnchVdEDh-1DEdAiZK0kk 1dLsYS9WprKRb7V_j7V5AU0o-Vt34hju4 1kl6-FHp7_JA9qXbEGa3eZKcsDUIWn89L
    1Xnvxy5jKRtxerJPMY-6ATvIDZINBUIn3 1yiMEnAgU1139UQRXmzmXge85cTJv7H6I 1eqa4dwpSSUTr1wcCh7FSZJ6xlbuI0dkK 1KLrzRTJ2nig5T8ZQqD_IHQ7gHPbT_PGz 1220CE5fw6fcdGd2oMAfrNo1iRt9LNv5M
    1rUuiCG1fiXVvIHWo6frnrXRsWkTViHOx 1Pha95ZMj4Ld01vcSRWKTXKZCpAGAR5k1 1n5_vziITxPA8SGjIaNlZmy9sAwshGExc 1EVt3fnMMoaLHZkq5Fcoa66HxUl4C6QNE 1rOjsfMkBO3rAFzpb6qLnl1621YcWszcQ
    1vzaMugMcOHc-MQwbGFH0MG1qytdo6tuW 18vubGA5IyZmM2QRZjOZJHn2F2dWvrptA 13UC5NDWBIQ6KrLBA6eivnkQDktSmkxV5 14NSFNN8y5mj23r3E5dOFpdIfsmKw8dpC 1V8050JE5yRHFJEKEAYufgY45itjHKMGn
    1JqXvVXnY10PdP2A6NndBkOoJZU89-P82 1tx84ORXaW9iDdfUti4Wk5ZU4Lg2CMz9q 1-YftTwZAYN57pkjLwW_MvsJOyHQAOLST 1WhSDZmTT16e_y8dPwgvH2ufy_3IYxNyV 1wxw3r0NRAxMORn3mayCEOf7ZPvwEURHe
  `),
  brochures: ids(`
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
};

export const instagramCatalogues = [
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
    brand: "Go Sharpener",
    accent: "#d6a8ff",
    codes: ids("DbX90mChXew DbVpysOTgv0 DbSq9ZkzUl2 DbNhEO4z1Jp DbK72AUTKhU"),
  },
  {
    brand: "Chai Calling",
    accent: "#ffb54a",
    codes: ids("DNqi6ixv2Yq DNqOnX7Txn8 DbYZlfAz3zW DbTYViEToDy DbQxquMz86u DbH7--SxCN8 DbC3VQexkhq"),
  },
  {
    brand: "Yuomo Men",
    accent: "#7ec8ff",
    codes: ids("DZfLzFRTNcj DXmfkohk4W- DXhcZ-Ik4tX DXZyBfSk8Vg DXhJ9rjkxat DXMWj1vk7Al DYplqTFT6YE DXWvcStE5o0 DXZM7MNhO54 DYmtt2qTYCP DYkbDvkzlN7 DWtfpF1k-Yc"),
  },
];

export const youtubeCatalogues = [
  {
    channel: "The Original You Show",
    handle: "theoriginalyoushow",
    ids: ids("voSM-iCHeFg GPzpXyRHUb8 Vz2wqRwpZGk CA2nl0PrL_8 hoVh-oKvOiQ pNFfK-W7nXE"),
  },
  {
    channel: "GoSharpener",
    handle: "gosharpener",
    ids: ids(`
      5oig0IdDF5c 355fd_NM9_U AD0DgPMtRL4 8lv3Q9DTDYo ZWi3tdHrG2M 2Tsq1kjGy7w f5IWBRYRFhs xu5uyYCvcW4 GRxSTecPhJQ rEB9F3_cO_E uaF0KrAk8rI V2cHcmBVFCA hax1eY-2vrQ ESkwRf8E7h4 KwqwcuL47wU
      MqX4crvenwo UXHeuJOMeCs I4hEFt1JiFU 6pRUTT6VJG4 4ctYBmXJpIk fMzuGvauWcI Rk-sCow2CCE OURb6dPxfk8 _JLrWbwnZg4 G4mc-MZsuoI 92XTWa1dqcM X146HnAwT0I xGErSp7YtUs 4TibSCRZCac 9wE6HZo-fCI
      ZF5MYAfVnXw pLga17-MLyI -DXpNIvgEoQ bT5OT5DQOSA VADyoV1MsbM MaM-LdVz5Ds RJ9bkznml6E SisOf0PUR5Q BjSewY2PIVU izLZ-PMfKrM DQNTOmDqS2o oTnkRAdeGIQ 9XTE_eNcS_s 1SxAB_0hnZ4 Cd83XbV12do
      kaaE5kJbwn0 uj754pGvyeg 0-1et8u3sCA 6QNUmlE_szI 1zDO6V-kH2w 835_xffYhM4 wcTiNRk2TmA fF-OVEe0Grk j7a6Lvy5f4I yqXGPqeoBpU d2piifU4elM CIMSQsChTQo 5d4CIdb7ZXs 8WX58L1BIQk U91-xIy11aE
      TUPgPMFdyoU ZdzJ7ChDJ8g FSdnUaR9vA8 y3W4sIEDFXY Uf-B30x9no4 Jlxo0vcEyl4 JuZ0ARZ4tgQ TAcEO3fotF8 r7LUFtP2FY4 DMPNPi7qNzk _GTfCjNwzaM axooKW0kP_Q xFTk3s5cpBI BMTWSEpWchU ONvjhGNYnGQ
      zjFvYm3DkOY BSkLUCCKCAA ACFxrqo4fI8 IsQcAwULS3U qWUvkQi72PE 3nBo6PYa8o4 7Mwy1x5C2hc Bp9S-gbCfn8 NxRKe7r0omw SD8TeR3OdQw b2M2flOpanE pxNBKMx6nVU CbR1E0710Ng Xco_xEo_lbE OEW92veXLnk
      lBqFrf1n8zU gMNiNqFJJHQ 3XqDFXy_CK8 mfy373gDHAY kyz-_0rJAAw ICoYCzi3e_k 5GafP4ucZBA vwA_RQ_qXiM K4hPLRQNKYI Totq4OoU8rc XerhBhsCvQk GRSDmWr0qp8 31UCIxbVmqA CCS5QL6zqUs j03idH4s4HE
      i3AE8JDluqQ ErC29UW8ldM 7VosquGnFwc MRI7YZHpp5U RAztNCQY9d4 XShRro70fwc EZqqr1gLYXc SMPEvDYmsPg g2hzzzQtd7g OB9JB0ZpEwo c3FO3iqsXHU 06tNO2tWU0A dTum5OsKkfw 6ctaiIirmk0 Nv7_4JGlOSM
      JZ4cmhMKF1Q 3jogKby27gU gcdhNAmeWzk cYJu_tqC0vc szifLg8Mc08 5Kf2J8rUVA0 6nQL6vfQuqo OWwhQRRvCVM -F7LROudBaY nfY_aP_8Ngw OJL-ZPrt1zo 1MPh3jZdwjg ihTD6qeZuAI yIZNKOcV0iY f4OVfpxkw0A
      4pidjbEU2bg mYcYd2lviSo Y07pvoi9U2g m4h6y5rC1LA 4hrR2Umut4I S7yT52AA3cU gQkcmx5gkPs _6wfk3HGMBY szaoysfAkqU OJl7EeTtfxA jn_ityFR5Rw 70MTSpA29Qc DnN25fpWzno EA5r5g4rOh8 Q5hnI6xKv54
    `),
  },
];
