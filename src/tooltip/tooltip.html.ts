export const template = `<style>
    /* Tooltip text */
    .tooltip-text {
        text-transform: none;
        font-size: 10px;
        font-weight: 500;

        background-color: rgba(97,97,97,0.9);
        color: #fff;
        text-align: center;
        border-radius: 4px;

        /* Position the tooltip text */
        position: absolute;
        z-index: 100;

        transition: opacity 1s;
        height: 22px;
        line-height: 22px;
        padding-left: 8px;
        padding-right: 8px;
    }
</style>
<div class="tooltip-text"  [ngStyle]="{top: top, left: left}">
{{content}}
</div>`;