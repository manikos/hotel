<template>
    <div class="control has-icon has-icon-right">
        <input :value="value"
               @input="sanitizeInput($event.target.value)"
               ref="input"
               type="text"
               class="input is-medium"
               :placeholder="placeholder"
               @keydown="$emit('keydown')"
        >
        <!--TODO: consider making a custom directive for listening to native DOM events from another comp.-->
        <span class="icon"><i :class="['fa', this.icon]"></i></span>
        <span v-if="error" class="help is-danger">{{error}}</span>
    </div>
</template>

<script>
    export default {
        props: ['value', 'error', 'placeholder', 'icon'],
        methods: {
            // Instead of updating the value directly, this
            // method is used to format and place constraints
            // on the input's value
            sanitizeInput (value) {
                // Sanitize input
                let sanitizedValue = value.trim();
                // If the value was not already normalized,   😕? todo: ask the forum!!!
                // manually override it to conform
                if (sanitizedValue !== value) {
                    this.$refs.input.value = sanitizedValue
                }
                // Emit the number value through the input event
                this.$emit('input', sanitizedValue)
            }
        }
    }
</script>