var icons=["icon-conversation",
"icon-faq",
"icon-folder-n-open",
"icon-folder-n",
"icon-key-fill",
"icon-keyboard",
"icon-play-line",
"icon-poll-fill-all",
"icon-poll-fill",
"icon-poll",
"icon-privacy-policy",
"icon-search-plus",
"icon-terms_of_service",
"icon-tutorial",
"icon-connect-circle",
"icon-connect-fill",
"icon-connect",
"icon-arrow-down-fill",
"icon-arrow-left-fill",
"icon-arrow-right-fill",
"icon-arrow-up-fill",
"icon-link-broken",
"icon-link",
"icon-bullhorn-fill",
"icon-bullhorn",
"icon-comment-fill",
"icon-comment",
"icon-info-fill",
"icon-info",
"icon-member-disabled-fill",
"icon-member-disabled",
"icon-user-plus-fill",
"icon-user-plus",
"icon-users-line",
"icon-accounthome",
"icon-angle-double-down",
"icon-angle-double-left",
"icon-angle-double-right",
"icon-angle-double-up",
"icon-angle-down",
"icon-angle-left",
"icon-angle-right",
"icon-angle-up",
"icon-arrow-down",
"icon-arrow-left-circle",
"icon-arrow-left",
"icon-arrow-right-circle",
"icon-arrow-right",
"icon-arrow-up",
"icon-at",
"icon-bars",
"icon-bell-fill",
"icon-bell-slash-fill",
"icon-bell-slash",
"icon-bell",
"icon-chat-plus-circle",
"icon-chat",
"icon-check-circle",
"icon-check",
"icon-clock-fill",
"icon-clock",
"icon-cog-fill",
"icon-cog",
"icon-delete",
"icon-download-fill",
"icon-download",
"icon-file-fill",
"icon-file",
"icon-folder-fill",
"icon-folder",
"icon-global",
"icon-help-fill",
"icon-help",
"icon-laptop-mini",
"icon-laptop",
"icon-lock",
"icon-long-arrow-left",
"icon-long-arrow-right",
"icon-mail",
"icon-microphone",
"icon-minimize",
"icon-minus-circle",
"icon-more-circle",
"icon-more-fill",
"icon-more-vertical-circle",
"icon-more-vertical",
"icon-more",
"icon-pencil-fill",
"icon-pencil-line",
"icon-pencil",
"icon-phone-fill",
"icon-phone",
"icon-plus-circle",
"icon-plus",
"icon-refresh",
"icon-remove-circle",
"icon-reorder",
"icon-search",
"icon-share-left-circle",
"icon-share-left-fill",
"icon-share-left",
"icon-share-right-circle",
"icon-share-right-fill",
"icon-share-right",
"icon-sign-out-fill",
"icon-sign-out",
"icon-star-circle-fill-off",
"icon-star-circle-fill-on",
"icon-star-circle-off",
"icon-star-circle-on",
"icon-star-off",
"icon-star-on",
"icon-sticker",
"icon-switch",
"icon-topic-fill",
"icon-topic-plus",
"icon-topic-private",
"icon-topic",
"icon-trash-fill",
"icon-trash",
"icon-upload-fill",
"icon-upload",
"icon-user-circle-fill",
"icon-user-circle",
"icon-user-fill",
"icon-user-plus-circle-fill",
"icon-user-plus-circle",
"icon-user",
"icon-users",
"icon-volume-down",
"icon-volume-off",
"icon-volume-up",
"icon-warning-fill",
"icon-warning-triangle",
"icon-warning",
"icon-wrench" 
];
$(function(){
  var jqIconBox = $("#icons").find(".icon-list-container");
  var len=icons.length;
  var i;
  for(i=0;i<len;i++){
    jqIconBox.append('<div class="icon-element"><i class="'+icons[i]+'"></i><span>'+icons[i]+'</span></div>');
  }
});