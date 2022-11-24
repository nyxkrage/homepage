getLatestPosts = async (urls) => {
    const res = await fetch(`https://${CONFIG.mastodonFeed}/api/v1/timelines/public?remote=false&only_media=false`, {
        "headers": {
            "Accept": "application/json",
        },
        "method": "GET",
    });
    return res.json()
}

const generateFeed = () => {
    const position = 'beforeend';
    getLatestPosts().then(posts => {
        for (const post of posts) {
            if (post.in_reply_to_id !== null) {
                continue
            }
            let postContainer = `
            <div class="feedPost">
                <div class="postHeader">
                    <img class="postAvatar" src="${post.account.avatar_static}"/>
                    <a 
                      href="${post.account.url}"
                      target="${CONFIG.openInNewTab ? '_blank' : ''}"
                    >${post.account.acct}</a>
                    <a 
                      class="postLink"
                      href="${post.url}"
                      target="${CONFIG.openInNewTab ? '_blank' : ''}"
                    ><i class="ph-link"></i></a>
                </div>
                <div>${post.content}</div>
                ${
                    post.media_attachments.length !== 0 && post.media_attachments[0].type === "image" ? `<img class="postImage" src="${post.media_attachments[0].url}">` : ""
                }
            </div>
          `;

            feedBlock.insertAdjacentHTML(position, postContainer);
        }
    })
};

generateFeed()