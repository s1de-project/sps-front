import {createStore} from 'vuex'

const channelStore = {
    fetch(){
        const arr = [
            {
                no:0,
                name: "랜덤",
                topic: "랜덤 토픽"
            },
            {
                no:1,
                name: "일반",
                topic: "일반 토픽"
            },
            {
                no:2,
                name: "테스트",
                topic: "테스트 토픽"
            }
        ];
        return arr;
    }
}

const dmStore = {
    fetch(){
        const arr = [
            {
                no:0,
                name: "남동윤",
                profilePicture: require("../assets/images/icon/ico-user.png")
            },
            {
                no:1,
                name: "최석준",
                profilePicture: require("../assets/images/icon/ico-user.png")
            },
            {
                no:2,
                name: "강민지",
                profilePicture: require("../assets/images/icon/ico-user.png")
            }
        ];
        return arr;
    }
}

const etcStore = {
    fetch(){
        const arr = [
            {
                no:0,
                name: "Page List",
                path: "/",
                icon: require("../assets/images/icon/ico-company.png")
            },
            {
                no:1,
                name: "GUIDE",
                path: "/TestGuide",
                icon: require("../assets/images/icon/ico-company.png")
            },
            {
                no:2,
                name: "채널 브라우저",
                path: "/ChannelBrowser",
                icon: require("../assets/images/icon/ico-company.png")
            },
        ]
        return arr;
    }
}

export const store = createStore({
    state: {
        HeaderText: 'TODO it!',
        channelList: channelStore.fetch(),
        dmList: dmStore.fetch(),
        etcList: etcStore.fetch()

    },
    mutations: {
        addChannel(state, newChannel){
            console.log("channel create mutation ", newChannel);
            state.channelList.push(newChannel);
        }
    }
});