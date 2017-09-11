<template>
    <div>
        <back :title="navTitle" />
    </div>
</template>
<script>
import back from '@/components/back.vue';
import { mapState, mapMutations } from 'vuex';
import { SET_TOPTITLE, CLEAR_TOPTITLE } from '@/store/types';
export default {
    data() {
        return {

        }
    },
    components: {
        back: back
    },
    created() {
        this.$store.commit(SET_TOPTITLE, '我的简历');
    },
    computed: mapState({ navTitle: state => state.book.topTitle }),
    methods: mapMutations([CLEAR_TOPTITLE]),
    destroyed() {
        // 清除state中的标题
        this.CLEAR_TOPTITLE();
        // console.log(this.$store.state.book.topTitle);
    }
}
</script>
<style lang="scss" scoped>

</style>