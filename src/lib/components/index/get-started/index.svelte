<script lang="ts">
  import Section from "../../section.svelte";
  import LaunchExampleWorkspace from "./launch-example-workspace.svelte";
  import LinkGitRepository from "./link-git-repository.svelte";
  import Card from "$lib/components/ui-library/card";
  import configCatClient from "$lib/utils/feature-flag-provider";

  var featureFlag = true;
  configCatClient
    .getValueAsync("home_example_launch_workspaces_card", false)
    .then((value) => {
      featureFlag = value;
    });
</script>

<Section id="get-started" class="pt-20">
  <h2 class="!mb-x-small text-center text-h2">Get started for free</h2>
  <div
    class="cards-container flex flex-col lg:flex-row max-w-[600px] lg:max-w-none gap-4 mx-auto"
    class:justify-between={featureFlag}
    class:justify-center={!featureFlag}
  >
    <Card
      class="p-xx-small sm:py-small basis-[50%] sm:px-x-small xl:p-medium text-center"
      size="small"
    >
      <LinkGitRepository />
    </Card>

    {#if featureFlag}
      <Card
        class="p-xx-small sm:py-small  basis-[50%] sm:px-x-small xl:p-medium text-center"
        size="small"
      >
        <LaunchExampleWorkspace />
      </Card>
    {/if}
  </div>
</Section>
