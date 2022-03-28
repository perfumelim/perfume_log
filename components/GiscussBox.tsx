import { Giscus } from "@giscus/react";
import metadata from "data/metadata";

const GiscusBox = ({ slug }: { slug: string }) => {
  return (
    <Giscus
      repo={`${metadata.giscus.id}/${metadata.giscus.repo}`}
      repoId="R_kgDOG__fiQ"
      category={metadata.giscus.category}
      categoryId="DIC_kwDOG__fic4COSq9"
      mapping="specific"
      term={slug}
      reactionsEnabled="1"
      emitMetadata="0"
      theme="transparent_dark"
    />
  );
};

export default GiscusBox;
