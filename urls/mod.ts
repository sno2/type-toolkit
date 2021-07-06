export declare namespace Url {
  /**
   * Static URL types built and customized using template literals without
   * generics.
   */
  export namespace Static {
    interface $NewOpts {
      protocol: string;
      domain: string;
      topDomain: string;
      path: string;
    }

    interface $DefaultNewOpts extends $NewOpts {
      path: `/${string}` | "";
    }

    export type New<
      Opts extends Partial<$NewOpts> = $DefaultNewOpts,
      $RealOpts extends $NewOpts = $DefaultNewOpts & Opts
    > = `${$RealOpts["protocol"]}://${$RealOpts["domain"]}.${$RealOpts["topDomain"]}${$RealOpts["path"]}`;
  }
}
