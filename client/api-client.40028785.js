async function a({query:a,variables:e=null}){const t={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:a,variables:e})},n=await fetch("https://arweave.net/graphql",t);return await n.clone().json()}export{a as q};
